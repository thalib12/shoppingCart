import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {

    const cartData=useSelector((state)=>{return state.cart})
    console.log("Cart data",cartData)
  return (
    <div>
        crtyhc
    </div>
  )
}

export default Cart