import React from 'react'

const Shimmer = () => {
  
  return (
    <div className='overflow-hidden relative max-w-xs w-full border-box inline-flex flex-col space-y-2'>
        <div className='overflow-hidden relative w-full h-40 bg-[#f6f7f8] skeleton'>

        </div>

        <div className='overflow-hidden relative w-full h-5 bg-[#f6f7f8] skeleton'>
        
        </div>

        <div className='overflow-hidden relative w-4/5 h-5 bg-[#f6f7f8] skeleton'>

        </div>

        <div className='overflow-hidden relative w-1/2 h-5 bg-[#f6f7f8] skeleton'>

        </div>


    </div>
  
  )
}

export default Shimmer;