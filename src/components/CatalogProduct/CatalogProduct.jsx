import style from './CatalogProduct.module.css'
import { API_URI } from '../../const'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../store/order/orderSlice'

const CatalogProduct = ({item}) => {
  const dispatch = useDispatch()

  return (
    <article className={style.product}>
    <img src={`${API_URI}/${item.image}`} alt={item.title} className={style.image}/>

    <p className={style.price}>{item.price}<span className={style.currency}>₽</span></p>

    <h3 className={style.title}>
    <button className={style.detail}>{item.title}</button>
    </h3>

    <p className={style.weight}>{item.weight}</p>

    <button 
    className={style.add} 
    type="button"
    onClick={() => {
      dispatch(addProduct({id: item.id}))
    }}
    >Добавить</button>
    </article>
  )
}

export default CatalogProduct