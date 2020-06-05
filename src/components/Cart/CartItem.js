import React, { useContext } from 'react'
import './CartItem.css'
import DeleteBtn from './DeleteBtn'
import Context from '../../context'

export default function CartItem({ item }) {
  const { cart, setCart } = useContext(Context)
  const src = '/photos/' + item.id.toString() + '.jpg'
  
  function deleteItem(item) {
    setCart(
      cart.filter(x => x.id !== item.id)
    )
  }

  function changeQuantity(num) {
    setCart(
      cart.map(x => {
        if (x.id === item.id) {
          x.quantity += num
        }
        return x
      })
    )
    setCart(
      cart.filter(x => x.quantity > 0)
    )
  }

  return (
    <div className="cart-item">
      <div className="cart-item__block">
        <img src={src} className="cart-item__img" alt={item.name}></img>
        <div className="cart-item__label">
          <h3 className="cart-item__name">{item.name}</h3>
          <span className="cart-item__price">{item.price}</span>
        </div>
      </div>
      <div className="cart-item__block">
        <button type="button" className="cart-item__btn" onClick={changeQuantity.bind(null, -1)}>-</button>
        <span className="cart-item__quantity">{item.quantity}</span>
        <button type="button" className="cart-item__btn" onClick={changeQuantity.bind(null, 1)}>+</button>
        <DeleteBtn item={item} deleteItem={deleteItem} />
      </div>
    </div>
  )
}