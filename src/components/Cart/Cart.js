import React, { useContext } from 'react'
import './Cart.css'
import CartBtn from './CartBtn'
import Context from '../../context'
import CartItem from './CartItem'
import RegularBtn from '../RegularBtn/RegularBtn'
import OrderBtn from '../Order/OrderBtn'

export default function Cart() {
  const [isOpen, setOpen] = React.useState(false)
  const { cart } = useContext(Context)
  const quantity = cart.reduce((a, b) => ({quantity: a.quantity + b.quantity}), {quantity: 0}).quantity
  const EmptyCart = (
    <React.Fragment>
      <p>The cart is empty</p>
      <RegularBtn onclick={closeCart} label="Choose something" />
    </React.Fragment>
  )
  const CartContent = (
    <React.Fragment>
      {cart.map((item, i) => <CartItem item={item} key={i} />)}
      <OrderBtn />
    </React.Fragment>
  )

  function openCart() {
    setOpen(true)
  }

  function closeCart() {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <CartBtn quantity={quantity} openCart={openCart}/>
      {isOpen && (
        <div className="cart">
        <div className="cart-body">
          <h2>Cart</h2>
          {cart.length ? CartContent : EmptyCart}
          <button type="button" className="cart__close-btn" onClick={closeCart.bind(null)}>&times;</button>
        </div>
        </div>
      )}
    </React.Fragment>
  )
}