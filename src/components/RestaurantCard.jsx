import React from 'react'
import { RESTAURANT_IMG_CDN } from '../utils/constants';
import { Link } from 'react-router-dom';

const RestaurantCard = ({data}) => {
  //  console.log("RestaurantCard component");
    
    const {id,name, cloudinaryImageId,costForTwo,cuisines,sla:{deliveryTime},avgRating} = data;

    let cuisine = cuisines.join(', ');
    const isRatingGreater = (avgRating > 4)?(true):(false);
  
  return (
    
    <Link to={`/restaurants/${id}`} className='max-w-xs border-box inline-flex flex-col space-y-2 p-4 border border-transparent transition-colors hover:border-slate-300 hover:shadow-md'>

      <div className='w-full h-40'>
        <img className='w-full h-full object-cover object-center' src={RESTAURANT_IMG_CDN+cloudinaryImageId} loading='lazy'/>
      </div>
      <div className='w-full overflow-clip'>
        <h1 className='font-semibold text-base'>{name}</h1>
        <p className='line-clamp-2 text-slate-500 break-words text-xs'>{cuisine}</p>
        
      </div>
      <div className='flex justify-between items-center'>
          <span className= {`text-xs text-white font-normal px-1 py-1  ${(isRatingGreater)? ('bg-green-500'):('bg-[#F9A630]')}`}>&#9733;{avgRating}</span>
          <span className='text-lg text-slate-500'>&middot;</span>
          <span className='text-xs text-slate-500 font-normal'>{deliveryTime} MINS</span>
          <span className='text-lg text-slate-500'>&middot;</span>
          <span className='text-xs text-slate-500 font-normal'>{costForTwo}</span>

        </div>

      
    </Link>
  )
}

export default RestaurantCard;