import React, { useEffect, useState } from 'react'
import cartList from "./cartList.css"

const CartList = ( {cart} ) => {

  const [CART, setCART] = useState([]);

  useEffect(()=>{
    setCART(cart)
  },[])

  const clearCart = () =>{
    setCART([])
  }

  return (
    <div>
      {
        CART?.map((cartItem, cartIndex) => {
          return (
            <div>
              <img src={cartItem.image} width={200} />
              <span className='name'>{cartItem.name}</span>
              <div>
                <button className='decrease-btn' onClick={()=>{
                  const _CART = CART.map((item, index)=>{
                    return cartIndex === index ? {...item, quantity : item.quantity - 1} : item
                  })
                  setCART(_CART)
                }}>-</button>
                <span className='quntity'>{cartItem.quantity}</span>
                <button className='increase-btn' onClick={()=>{
                  const _CART = CART.map((item, index)=>{
                    return cartIndex === index ? {...item, quantity : item.quantity + 1} : item
                  })
                  setCART(_CART)
                }}>+</button>
              </div>
              <span className='price'>Rs. {cartItem.price * cartItem.quantity}</span>
            </div>
          )
        })
      }
      <p> Total : RS.
        {
          CART.map(item=> item.price * item.quantity).reduce((total, value)=> total + value, 0)
        }
      </p>
      <button className='order_btn' onClick={()=>clearCart()}>ORDER NOW </button>
    </div>
  )
}

export default CartList;
