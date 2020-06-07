import React from 'react'
import { Link } from "react-router-dom";
import RegularBtn from '../RegularBtn/RegularBtn'

export default function OrderBtn() {
  return (
    <Link to="/order">
     <RegularBtn>Order now</RegularBtn>
    </Link>
  )
}