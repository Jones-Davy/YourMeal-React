import { useDispatch, useSelector } from 'react-redux'
import { orderRequestAsync } from '../../store/order/orderSlice'
import { useEffect, useState } from 'react'
import OrderGoods from '../OrderGoods/OrderGoods'
import style from './Order.module.css'
import { openModal } from '../../store/modalDelivery/modalDeliverySlice'
import classNames from 'classnames';

const Order = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  const {totalPrice, totalCount, orderList, orderGoods} = useSelector(state => state.order)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(orderRequestAsync())
    
  }, [orderList.length]);

  return (
    <div className={style.order}>
    <section className={isActive ? classNames(style.wrapper, style.zIndex) : style.wrapper}>
      <div className={style.header} onClick={handleActive} tabIndex="0" role="button">
        <h2 className={style.title}>Корзина</h2>

        <span className={style.count}>{totalCount}</span>
      </div>

      <div className={isActive ? classNames(style.wrap_list, style.order_open) : style.wrap_list}>
        <ul className={classNames(style.list)}>
          {orderGoods.map((item) => <OrderGoods key={item.id} {...item}/>)}
        </ul>

        <div className={style.total}>
          <p>Итого</p>
          <p>
            <span className={style.amount}>{totalPrice}</span>
            <span className={style.currency}>&nbsp;₽</span>
          </p>
        </div>

        <button 
        className={style.submit} 
        disabled={orderGoods.length === 0}
        onClick={() => {
          dispatch(openModal())
        }}>
        Оформить заказ
        </button>

        <div className={style.apeal}>
          <p className={style.text}>Бесплатная доставка</p>
          <button className={style.close}>Свернуть</button>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Order