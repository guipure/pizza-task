import React, { useContext } from 'react'
import './Calculator.css'
import Context from '../../context'

export default function Calculator({ item }) {
  const { cart, setCart } = useContext(Context)
  const quantity = cart.filter(x => x.id === item.id)[0].quantity
  
  function changeQuantity(num) {
    setCart(
      cart.map(x => {
        if (x.id === item.id) {
          x.quantity += num
        }
        return x
      })
    )
    setCart(
      cart.filter(x => x.quantity > 0)
    )
  }

  return (
    <div>        
      <button type="button" className="calculator__btn" onClick={changeQuantity.bind(null, -1)}>-</button>
      <span className="calculator__quantity"><strong>{quantity}</strong></span>
      <button type="button" className="calculator__btn" onClick={changeQuantity.bind(null, 1)}>+</button>
    </div>
  )
}