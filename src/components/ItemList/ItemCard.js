import React from 'react'
import './ItemCard.css'
import AddBtn from '../Cart/AddBtn'


export default function ItemCard({ item }) {
  const src = '/photos/' + item.id.toString() + '.jpg'
  return (
    <div className="item-card">
      <img src={src} className="item-card__img" alt={item.name}></img>
      <div className="item-card__footer">
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
        <div className="item-card__controls">
          <AddBtn item={item} />
          <span className="item-card__price">{item.price + ' €'}</span>
        </div>
      </div>
    </div>
  )
}