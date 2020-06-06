import React, { useContext } from 'react'
import './Cart.css'
import CartBtn from './CartBtn'
import Context from '../../context'
import CartItem from './CartItem'
import RegularBtn from '../RegularBtn/RegularBtn'
import Order from '../Order/Order'
import Modal from '../Modal/Modal'

export default function Cart() {
  const [isOpen, setOpen] = React.useState(false)
  const openCart = () => setOpen(true)
  const closeCart = () => setOpen(false)
  const { cart } = useContext(Context)
  const quantity = cart.reduce((a, b) => ({quantity: a.quantity + b.quantity}), {quantity: 0}).quantity
  const EmptyCart = (
    <React.Fragment>
      <p>The cart is empty</p>
      <RegularBtn onclick={closeCart}>Choose something</RegularBtn>
    </React.Fragment>
  )
  const CartContent = (
    <React.Fragment>
      {cart.map((item, i) => <CartItem item={item} key={i} />)}
      <Order />
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <CartBtn quantity={quantity} openCart={openCart}/>
      {isOpen && (
        <Modal onclose={closeCart.bind(null)}>
          <h2>Cart</h2>
          {cart.length ? CartContent : EmptyCart}
        </Modal>
      )}
    </React.Fragment>
  )
}