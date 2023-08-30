import React from 'react'
import emptyCart from "../assets/emptyCart.png"

const EmptyCart = () => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='bg-gray-200'>
            <img src={emptyCart} alt="empty-cart" className='mix-blend-multiply w-full h-full'/>
            <h1 className='text-xl text-center font-semibold'>Cart is empty</h1>
        </div>
        

    </div>
  )
}

export default EmptyCart;