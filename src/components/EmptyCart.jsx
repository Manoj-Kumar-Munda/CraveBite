import React from 'react'
import { Link } from 'react-router-dom';


const EmptyCart = () => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='bg-white max-w-sm w-96 space-y-3 text-center'>
            <img 
              src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"} 
              alt="empty-cart" 
              className='mix-blend-multiply w-full h-full'/>
            <h1 className='text-base text-slate-700 font-semibold'>Your cart is empty</h1>
            <p className='text-sm text-slate-400'>You can go to homepage to view more restaurants</p>
            <button className='bg-orange-500 py-2 px-6'>
              <Link to={"/"}>
                <span className='text-white font-bold text-sm'>BROWSE RESTAURANTS</span>
              </Link>

            </button>
        </div>
        

    </div>
  )
}

export default EmptyCart;