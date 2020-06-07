import React, { useContext, useState } from 'react'
import './CartTotal.css'
import Context from '../../context'
import convertEURtoUSD from '../../converter'

export default function CartTotal() {
  const { cart } = useContext(Context)
  const [USD, setUSD] = useState('$')
  const EUR = calcTotal(cart)
  convertEURtoUSD(
    Number.parseFloat(EUR))
    .then(res => setUSD(res + ' $')
  )

  function calcTotal(cart) {
    let sum = 0

    for (let item of cart) {
      sum += item.quantity * item.price
    }

    return sum.toString() + ' €'
  }

  
  return (
    <div className="cart-total">
      <h3 className="cart-total__label">Total price:</h3>
      <div className="cart-total__price">
        <h3 className="cart-total__eur">{EUR}</h3>
        <h3 className="cart-total__usd">{USD}</h3>
      </div>
    </div> 
  )
}