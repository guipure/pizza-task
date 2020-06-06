import React from 'react'
import ReactDOM from 'react-dom';
import './Modal.css'

export default function Modal({ children, onclose }) {
  const modalRoot = document.getElementById('modal-root')

  // We should close previous modal window if it exists
  const prevModal = modalRoot.querySelector('.modal')
  if (prevModal) modalRoot.removeChild(prevModal)
  
  const modalWindow = (
    <div className="modal">
      <div className="modal-body">
        {children}
        <button type="button" className="modal__close-btn" onClick={onclose}>&times;</button>
      </div>
    </div>
  )
  
  return ReactDOM.createPortal(
    modalWindow,
    modalRoot
  )
}