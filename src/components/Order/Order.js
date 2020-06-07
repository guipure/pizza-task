import React from 'react'
import { Link } from "react-router-dom";
import './Order.css'
import RegularBtn from '../RegularBtn/RegularBtn';
import '../RegularBtn/RegularBtn.css'

export default function Order() {
  return (
    <React.Fragment>
      
      <h1>Order</h1>
      <form className="order__form" onSubmit={e => e.preventDefault()}>
        <h2>Contact information</h2>
        <div className="order__input-grid">
          <label className="order__field">
            Name*
            <input type="text" name="name" className="order__input" />
          </label>
          <label className="order__field">
            Surname*
            <input type="text" name="surname" className="order__input" />
          </label>
          <label className="order__field">
            Email*
            <input type="email" name="email" className="order__input" />
          </label>
          <label className="order__field">
            Adress*
            <input type="text" name="adress" className="order__input" />
          </label>
        </div>
        <div className="order__btn-block">
          <Link to="/">
            <RegularBtn>back to cart</RegularBtn>
          </Link>
          <button type="submit" className="regular-btn">Order</button>
        </div>

        
      </form>
      
    </React.Fragment>
  )
}