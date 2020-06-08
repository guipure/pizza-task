import React from 'react'
import './Menu.css'
import Login from '../Login/Login'
import Cart from '../Cart/Cart'


export default function Menu() {
  return (
    <div className="menu">
      <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo"></img>
      <nav className="menu__nav">
        <Login />
        <Cart />
      </nav>
    </div>
  )
}