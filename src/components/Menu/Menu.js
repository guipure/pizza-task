import React, { useContext } from 'react'
import './Menu.css'
import LoginBtn from '../Login/LoginBtn'
import Cart from '../Cart/Cart'
import Context from '../../context'


export default function Menu() {
  const { currency, toggleCurrency } = useContext(Context)

  return (
    <div className="menu">
      <img src="logo.png" alt="logo"></img>
      <button type="button" className="menu__currency-btn" onClick={toggleCurrency.bind(null)}>{currency}</button>
      <LoginBtn />
      <Cart />
    </div>
  )
}