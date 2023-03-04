import { useDebugValue, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct, removeProduct } from '../../store/order/orderSlice'
import style from './Count.module.css'


const Count = ({count, id}) => {
    const dispatch = useDispatch()

    const addCount = () => {
      dispatch(addProduct({ id }))
    }

    const remCount = () => {
      dispatch(removeProduct({ id }))
    }   

  return (
    <div className={style.count}>
        <button className={style.minus} onClick={remCount}>-</button>
        <p className={style.amount}>{count}</p>
        <button className={style.plus} onClick={addCount}>+</button>
    </div>
  )
}

export default Count

