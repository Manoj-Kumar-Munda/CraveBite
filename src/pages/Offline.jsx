import React from 'react';
import OfflinePic from "../assets/offlineImg.svg";
import EmptyCart from "../assets/emptyCart.png"

const Offline = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
       
        <h1 className='text-4xl font-bold'>You are offline</h1>
        <h1 className='text-2xl'>Please check your internet connection</h1>

    </div>
  )
}

export default Offline;