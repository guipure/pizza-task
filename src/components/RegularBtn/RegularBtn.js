import React from 'react'
import './RegularBtn.css'

export default function RegularBtn({ onclick, children }) {
  return (
    <button type="button" className="regular-btn" onClick={onclick}>{children}</button>
  )
}