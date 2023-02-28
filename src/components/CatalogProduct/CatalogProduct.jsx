import style from './CatalogProduct.module.css'
import { API_URI } from '../../const'

const CatalogProduct = ({item}) => {
  return (
    <article className={style.product}>
    <img src={`${API_URI}/${item.image}`} alt={item.title} className={style.image}/>

    <p className={style.price}>{item.price}<span className={style.currency}>₽</span></p>

    <h3 className={style.title}>
    <button className={style.detail}>{item.title}</button>
    </h3>

    <p className={style.weight}>{item.weight}</p>

    <button className={style.add} type="button">Добавить</button>
</article>
  )
}

export default CatalogProduct