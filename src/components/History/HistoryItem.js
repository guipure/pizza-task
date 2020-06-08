import React, { useState } from 'react'
import './HistoryItem.css'
import convertEURtoUSD from '../../converter'


export default function HistoryItem({ order }) {
  const date = new Date(order.time)
  const formattedDate = date.toLocaleString('ru-RU')
  let total = 5 //delivery cost

  for (let pos of order.order) {
    total += pos.price * pos.quantity
  }

  total = Math.round(total * 100) / 100

  const [USD, setUSD] = useState(' $')
  convertEURtoUSD(total)
    .then(res => setUSD(res + ' $'))

  return (
    <div className="history-item">
      <h3>{formattedDate}</h3>
      <ul>
        {order.order.map((item, i) => (
          <li key={i} className="history-item__li">
            {item.name} {item.price} € ({item.quantity} pcs)
          </li>)
        )}
      </ul>
        <h4 className="history-item__total">Total: {total} € <span className="history-item__total-usd">/ {USD}</span></h4>
    </div>
  )
}