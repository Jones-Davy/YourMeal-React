import style from './OrderGoods.module.css'
import Count from '../Count/Count'
import { API_URI } from '../../const'

const OrderGoods = ({title, price, image, count, id, weight}) => {
  return (
    <li className={style.item}>
            <img className={style.image} src={`${API_URI}/${image}`} alt={title}/>

            <div className={style.goods}>
              <h3 className={style.title}>{title}</h3>

              <p className={style.weight}>{weight}г</p>

              <p className={style.price}>{price}
                <span className={style.currency}>&nbsp;₽</span>
              </p>
            </div>

            <Count count={count} id={id}/>
    </li>
  )
}

export default OrderGoods