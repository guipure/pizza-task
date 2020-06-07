import React, { useContext, useState } from 'react'
import './CartTotal.css'
import Context from '../../context'
import convertEURtoUSD from '../../converter'

export default function CartTotal() {
  const { cart } = useContext(Context)
  const [USD, setUSD] = useState('$')
  const deliveryCost = 5
  const EURnum = calcTotal(cart, deliveryCost)
  const EUR = EURnum.toString() + ' €'
  const estimatedUSD = Math.round(EURnum * 1.13 * 100) / 100 + ' $'
  convertEURtoUSD(EURnum)
    .then(res => setUSD(res + ' $'), err => setUSD(estimatedUSD))

  function calcTotal(cart, deliveryCost) {
    let sum = deliveryCost

    for (let item of cart) {
      sum += item.quantity * item.price
    }

    const result = Math.round(sum * 100) / 100
    return result
  }

  
  return (
    <div className="cart-total">
      <p className="cart-total__delivery">+ 5 € delivery cost</p>
      <div className="cart-total__main">
        <h3 className="cart-total__label">Total:</h3>
        <div className="cart-total__price">
          <h3 className="cart-total__eur">{EUR}</h3>
          <h3 className="cart-total__usd">{USD}</h3>
        </div>
      </div>
    </div> 
  )
}