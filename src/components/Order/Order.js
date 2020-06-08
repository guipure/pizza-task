import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import './Order.css'
import RegularBtn from '../RegularBtn/RegularBtn';
import '../RegularBtn/RegularBtn.css'
import Context from '../../context';

export default function Order() {
  const { cart, setCart } = useContext(Context)
  const userOrders = localStorage.getItem('userOrders') ? JSON.parse(localStorage.getItem('userOrders')) : []
  const lastUser = userOrders.length ? Object.assign({}, userOrders[userOrders.length - 1]) : {order: null}
  const [user, setUser] = useState(lastUser)
  const [isDone, setDone] = useState(false)
  let lastUserName, lastUserSurname, lastUserEmail, lastUserAdress

  if (lastUser.name) {
    lastUserName = lastUser.name
    lastUserSurname = lastUser.surname
    lastUserEmail = lastUser.email
    lastUserAdress = lastUser.adress
  }

  const orderForm = (
    <form className="order__form" onSubmit={handleSubmit.bind(null)}>
        <h2>Contact information</h2>
        <div className="order__input-grid">
          <label className="order__field">
            Name*
            <input type="text" name="name" className="order__input" onChange={handleChange.bind(null)} defaultValue={lastUserName} required />
          </label>
          <label className="order__field">
            Surname*
            <input type="text" name="surname" className="order__input" onChange={handleChange.bind(null)} defaultValue={lastUserSurname} required />
          </label>
          <label className="order__field">
            Email*
            <input type="email" name="email" className="order__input" onChange={handleChange.bind(null)} defaultValue={lastUserEmail} required />
          </label>
          <label className="order__field">
            Adress*
            <input type="text" name="adress" className="order__input" onChange={handleChange.bind(null)} defaultValue={lastUserAdress} required />
          </label>
        </div>
        <div className="order__btn-block">
          <Link to="/">
            <RegularBtn>back to cart</RegularBtn>
          </Link>
          <button type="submit" className="regular-btn">Order</button>
        </div>
      </form>
  )

  const doneOrder = (
    <h2>Your order has been placed.</h2>
  )

  function handleChange(event) {
    const input = event.target
    const value = input.value
    const name = input.name
    const updatedUser = user
    updatedUser[name] = value
    setUser(updatedUser)
  }


  function handleSubmit(event) {
    if (cart.length) {
      const updatedUser = user
      updatedUser.order = cart
      updatedUser.time = Date.now()
      userOrders.push(updatedUser)
      localStorage.setItem('userOrders', JSON.stringify(userOrders))
      setDone(true)
      setCart([])
    } else {
      alert('Your cart is empty')
    }
    
  }


  return (
    <React.Fragment>
      <h1>Order</h1>
      {isDone ? doneOrder : orderForm}
    </React.Fragment>
  )
}