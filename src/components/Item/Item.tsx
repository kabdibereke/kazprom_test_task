
import { ITodo } from '../../interface/todo'
import Button from '../Button/Button'
import styles from './Item.module.scss'
import { useDispatch} from 'react-redux'
import { AppDispatch } from '../../store/store'
import {  openDel } from '../../store/modalSlice';
import { getId } from '../../store/ItemSlice'
import { motion } from 'framer-motion'
    
const Item = ({title,id}:ITodo) => {
    const dispatch =useDispatch<AppDispatch>()
    const deleteHandler = ()=> {
        dispatch(openDel())
        dispatch(getId(id))
    }
  return (
    <motion.div className={styles.wrapper}
    initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}>
        <p className={styles.text}>
            {title}
        </p>
        <Button types='delItem' onClick={deleteHandler}>
            Удалить
        </Button>
    </motion.div>
  )
}

export default Item