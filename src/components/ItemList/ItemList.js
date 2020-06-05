import React from 'react'
import ItemCard from './ItemCard'
import items from '../../items'
import './ItemList.css'


export default function ItemList() {
  return (
    <div className="item-list">
      {items.map(item => <ItemCard item={item}  key={item.id} />)}
    </div>
  )
}