import React from 'react'
import './LoginBtn.css'


export default function LoginBtn({ openLogin }) {
  return (
    <button type="button" className="login-btn" onClick={openLogin}>
      <span className="material-icons">
        person
      </span>
    </button>
  )
}