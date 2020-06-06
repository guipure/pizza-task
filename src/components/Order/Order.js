import React, { useState } from 'react'
import './Order.css'
import RegularBtn from '../RegularBtn/RegularBtn'

export default function Order() {
  const [isOpen, setOpen] = useState(false)

  function openOrder() {
    setOpen(true)
  }

  // function closeOrder() {
  //   setOpen(false)
  // }

  return (
    <React.Fragment>
      <RegularBtn onclick={openOrder.bind(null)}>Order now</RegularBtn>
      {isOpen && (
        <div className="order">
          <div className="order-body">
            <h2>Order</h2>
          </div>
      </div>
      )}
    </React.Fragment>
    
  )
}