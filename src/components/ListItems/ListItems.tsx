import Item from '../Item/Item'
import styles from './ListItems.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import Button from '../Button/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sagaActions } from '../../store/sagaActions'
import { useEffect } from 'react'

const ListItems = () => {
    const {todo} = useSelector((state: RootState) => state.items)
    const dispatch =useDispatch<AppDispatch>()
    const {user} = useSelector((state: RootState) => state.users)

    useEffect(()=> {
      dispatch({ type: sagaActions.FETCH_DATA_SAGA })
    },[])

 
    const notify = () => {
      if(user[0]) {
        toast(`Результат запроса "Get a User":
          Name:${user[0].username};              
          Email: ${user[0].email};
          lat: ${user[0].address.geo.lat};
          lng: ${user[0].address.geo.lng}
          `)  
      } else {
        toast('Что-то пошло не так... Попробуйте позже')  
      }
    };
  return (
    <>
        <div className={styles.wrapper}>
        
        {todo.map((item,id)=> {
        return <Item  key={item.id} title={item.title} id={item.id}/>
        })}
        </div>
        {!todo.length && <p className={styles.text}> Список пуст </p>}
        {todo.length && <Button types='test' onClick={notify}>
          Тест GraphQL
        </Button>}
        <ToastContainer autoClose={3000} />
    </>
  )
}

export default ListItems