import React from 'react'
import './Modal.css'
import ReactDOM from 'react-dom';


export default function Modal({ children, onclose }) {
  document.body.style.overflow = 'hidden'
  const closeModal = function() {
    onclose()
    document.body.style.overflow = 'auto'
  }
  const modalRoot = document.getElementById('modal-root')
  const modalWindow = (
    <div className="modal">
      <div className="modal-body">
        {children}
        <button type="button" className="modal__close-btn" onClick={closeModal}>&times;</button>
      </div>
    </div>
  )

  return ReactDOM.createPortal(
    modalWindow, modalRoot
  )
}
