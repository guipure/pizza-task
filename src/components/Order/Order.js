import React from 'react'
import { Link } from "react-router-dom";
import './Order.css'
import RegularBtn from '../RegularBtn/RegularBtn'

export default function Order() {
  return (
    <React.Fragment>
      <h1>Order info</h1>
      <Link to="/">
        <RegularBtn>back to cart</RegularBtn>
      </Link>
    </React.Fragment>
  )
}