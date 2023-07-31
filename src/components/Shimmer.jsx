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
    // <div class="flex flex-col space-y-2 max-w-xs">
    //   <div class="relative w-full h-48 bg-[#f6f7f8] rounded-md overflow-hidden skeleton"></div>
    //   <div class="flex space-x-2">
    //     <div class="relative w-12 h-12 bg-[#f6f7f8] rounded-full overflow-hidden skeleton"></div>
    //     <div class="flex-1 space-y-2">
    //       <div class="relative bg-[#f6f7f8] w-full h-5 overflow-hidden skeleton"></div>
    //       <div class="relative bg-[#f6f7f8] h-5 w-1/2 overflow-hidden skeleton"></div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Shimmer;