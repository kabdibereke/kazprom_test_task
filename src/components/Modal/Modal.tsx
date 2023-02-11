import styles from './Modal.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { addItem, clearId, deleteAllItems } from '../../store/ItemSlice'
import { closeAdd, closeDel } from '../../store/modalSlice'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Button from '../Button/Button'
import { nanoid } from 'nanoid'
import { IModal } from './Modal.props'
import { removeItems } from '../../store/ItemSlice'
import { motion } from 'framer-motion'
const Modal = ({types}: IModal) => {
    const [inputText, setInputText] =useState('')
    const [message, setMessage] = useState('')
    const dispatch =useDispatch<AppDispatch>()
    const {id} = useSelector((state: RootState) => state.items)
    const addItemHandler =(e:FormEvent)=> {
        e.preventDefault()
        let id = nanoid()
        if(inputText.trim().length>3) {
            dispatch(addItem({
                id:id,
                title:inputText
            }))
            dispatch(closeAdd())
        }else {
            setMessage('Текст должен быть не менее 3 симоволов')
        }

    }

    const inputHandler= (e:ChangeEvent<HTMLInputElement>)=> {
        setInputText(e.target.value)
        setMessage('')
    }

    const deleteHandler= ()=> {
        if(id) {
            dispatch(removeItems(id))
        }else {
            dispatch(deleteAllItems())
        }
        
        dispatch(closeDel())
    }

    const closeModal = ()=> {
        dispatch(closeDel())
        dispatch(clearId())
    }

    const closeModalOutside =()=> {
        dispatch(closeDel())
        dispatch(closeAdd())
        closeModal()
        
    }
    useEffect(() => {
        const keyDownHandler = (event:KeyboardEvent) => {
          if (event.key === 'Escape') {
            closeModalOutside()
          }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

  return (
    <div className={styles.modal} onClick={closeModalOutside}>
        <motion.form className={styles.wrapper} onClick={(e)=> e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}>
           {types=='add' &&  
           <>
           <div className={styles.title}>
                Добавление элемента списка
           </div>
           <div className={styles.errorText}>
                {message}
            </div>
            <input type="text" autoFocus className={styles.input} onChange={inputHandler} placeholder={"Заполните поле"}/>
            <div className={styles.buttonWrapper}>
                <Button types="add" onClick={addItemHandler} type="submit" >
                Oк
                </Button>
                <Button types="del" onClick={()=> dispatch(closeAdd())} >
                Отмена
                </Button>
            </div>
           </>}
           {types=='del' &&  
           <>
            <div className={styles.title}>
               {id? 'Удалить этот элемент списка?': "Удалить все? "}
            </div>
            <div className={styles.buttonWrapper}>
                <Button types="add" onClick={deleteHandler} >
                Удалить
                </Button>
                <Button types="del" onClick={closeModal} >
                Отмена
                </Button>
            </div>
           </>}
        </motion.form>
    </div>
  )
}

export default Modal