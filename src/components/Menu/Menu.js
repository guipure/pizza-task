import React from 'react'
import './Menu.css'
import LoginBtn from '../Login/LoginBtn'
import Cart from '../Cart/Cart'


export default function Menu() {
  return (
    <div className="menu">
      <img src="logo.png" alt="logo"></img>
      <LoginBtn />
      <Cart />
    </div>
  )
}