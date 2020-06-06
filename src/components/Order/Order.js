import React, { useState } from 'react'
import './Order.css'
import RegularBtn from '../RegularBtn/RegularBtn'
import Modal from '../Modal/Modal'

export default function Order() {
  const [isOpen, setOpen] = useState(false)
  const openOrder = () => setOpen(true)
  const closeOrder = () => setOpen(false)

  return (
    <React.Fragment>
      <RegularBtn onclick={openOrder.bind(null)}>Order now</RegularBtn>
      {isOpen && (
        <Modal onclose={closeOrder.bind(null)}>
          <h2>Order</h2>
        </Modal>
      )}
    </React.Fragment>   
  )
}