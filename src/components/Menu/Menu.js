import React from 'react'
import './Menu.css'
import Login from '../Login/Login'
import Cart from '../Cart/Cart'


export default function Menu() {
  return (
    <div className="menu">
      <img src="logo.png" alt="logo"></img>
      <Login />
      <Cart />
    </div>
  )
}