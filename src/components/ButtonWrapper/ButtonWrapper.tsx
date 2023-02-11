import Button from '../Button/Button'
import styles from './ButtonWrapper.module.scss'
import { useDispatch, useSelector} from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { openAdd,openDel } from '../../store/modalSlice';
import { deleteAllItems } from '../../store/ItemSlice';
const ButtonWrapper = () => {
    const dispatch =useDispatch<AppDispatch>()
    const {todo} = useSelector((state: RootState) => state.items)
  return (
    <div className={styles.wrapper} >
        <Button types="add" onClick={()=> dispatch(openAdd())}>
            Добавить
        </Button>
       {todo.length!=0 &&  <Button types="del" onClick={()=> dispatch(openDel())}>
            Удалить Все
        </Button>} 
    </div>
  )
}

export default ButtonWrapper