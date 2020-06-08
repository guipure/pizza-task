import React, { useContext } from 'react'
import './CartItem.css'
import DeleteBtn from './DeleteBtn'
import Context from '../../context'
import Calculator from '../Calculator/Calculator'

export default function CartItem({ item }) {
  const { cart, setCart } = useContext(Context)
  const src = process.env.PUBLIC_URL + '/photos/' + item.id.toString() + '.jpg'
  const totalPrice = Math.round(item.price * item.quantity * 100) / 100 + ' €'
  
  function deleteItem(item) {
    setCart(
      cart.filter(x => x.id !== item.id)
    )
  }

  return (
    <div className="cart-item">
      <div className="cart-item__block">
        <img src={src} className="cart-item__img" alt={item.name}></img>
        <div className="cart-item__label">
          <h3 className="cart-item__name">{item.name}</h3>
          <span className="cart-item__price">{item.price + ' €'}</span>
        </div>
      </div>
      <div className="cart-item__block">
        <h3 className="cart-item__total-price">{totalPrice}</h3>
        <Calculator item={item} />
        <DeleteBtn item={item} deleteItem={deleteItem} />
      </div>
    </div>
  )
}