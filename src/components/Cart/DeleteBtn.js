import React from 'react'
import './DeleteBtn.css'

export default function DeleteBtn({ item, deleteItem }) {
  return (
    <button type="button" className="delete-btn" onClick={deleteItem.bind(null, item)}>&times;</button>
  )
}