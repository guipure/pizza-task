import React from 'react'
import './Modal.css'


export default function Modal({ children, onclose }) {
  return (
    <div className="modal">
      <div className="modal-body">
        {children}
        <button type="button" className="modal__close-btn" onClick={onclose}>&times;</button>
      </div>
    </div>
  )
}
