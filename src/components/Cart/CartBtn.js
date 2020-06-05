import React from 'react'
import './CartBtn.css'


export default function CartBtn({ quantity, openCart }) {
  let quantityElement

  if (quantity) {
    quantityElement = (
      <span className="cart-btn__quantity">
        {quantity}
      </span>
    )
  } 

  return (
    <button type="button" className="cart-btn" onClick={openCart.bind(null)}>
      <span className="material-icons">
        shopping_cart
      </span>
      {quantityElement}      
    </button>
  )
}