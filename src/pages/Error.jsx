import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    
  return (
    <div className='min-h-screen flex justify-center items-center flex-col space-y-2'>
        <h1 className='text-6xl font-bold'>Uh oh! We've got a problem</h1>
        <h1 className='text-4xl font-bold'>{error?.message || error?.statusText}</h1>
    </div>
  )
}

export default Error;