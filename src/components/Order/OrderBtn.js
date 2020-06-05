import React from 'react'
import RegularBtn from '../RegularBtn/RegularBtn'

export default function OrderBtn() {
  function order() {

  }

  return (
    <RegularBtn onclick={order.bind(null)} label="Order now" />
  )
}