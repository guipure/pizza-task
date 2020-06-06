import React, { useContext } from 'react'
import Context from '../../context'
import RegularBtn from '../RegularBtn/RegularBtn'

export default function AddBtn({ item }) {
  const { cart, setCart } = useContext(Context)

  function addToCart(item) {
    const itemInCart = cart.filter(itemInside => itemInside.id === item.id)

    if (itemInCart.length) {
      setCart(
        cart.map(itemInside => {
          if (itemInside.id === item.id) {
            itemInside.quantity++
          }
          return itemInside
        })
      )
    } else {
      let newItem = item
      newItem.quantity = 1
      setCart(
        cart.concat(newItem)
      )
    }
  }
  
  return (
    <RegularBtn onclick={addToCart.bind(null, item)}>Add to cart</RegularBtn>
  )
}