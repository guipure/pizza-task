import React from 'react'
import './RegularBtn.css'

export default function RegularBtn({ onclick, label }) {
  return (
    <button type="button" className="regular-btn" onClick={onclick}>{label}</button>
  )
}