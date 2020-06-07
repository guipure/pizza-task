import React, { useContext } from 'react'
import './Cart.css'
import CartBtn from './CartBtn'
import Context from '../../context'
import CartItem from './CartItem'
import RegularBtn from '../RegularBtn/RegularBtn'
import OrderBtn from '../Order/OrderBtn'
import Modal from '../Modal/Modal'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Order from '../Order/Order'
import CartTotal from './CartTotal'

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
      <CartTotal />
      <OrderBtn />
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <CartBtn quantity={quantity} openCart={openCart}/>
      {isOpen && (
        <Modal onclose={closeCart.bind(null)}>
          <Router>
            <Switch>
              <Route path="/order">
                <Order />
              </Route>
              <Route path="/">
                <h2>Cart</h2>
                {cart.length ? CartContent : EmptyCart}
              </Route>
            </Switch>
          </Router>
        </Modal>
      )}
    </React.Fragment>
  )
}