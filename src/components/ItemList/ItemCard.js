import React, { useContext } from 'react'
import './ItemCard.css'
import AddBtn from '../Cart/AddBtn'
import Calculator from '../Calculator/Calculator'
import Context from '../../context'


export default function ItemCard({ item }) {
  const src = '/photos/' + item.id.toString() + '.jpg'
  const { cart } = useContext(Context)
  const isInCart = cart.filter(x => x.id === item.id).length ? true : false

  return (
    <div className="item-card">
      <div>
        <img src={src} className="item-card__img" alt={item.name}></img>
        <div className="item-card__info">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      </div>
      <div className="item-card__footer">
        <AddBtn item={item} />
        {isInCart && <Calculator item={item} />}
        <span className="item-card__price">{item.price + ' €'}</span>
      </div>
    </div>
  )
}