import React from 'react'
import Background from "../assets/take-away-animate.svg";

const Hero = () => {
  console.log("Inside Hero component");
  const goToRestaurants = () => {
    const element = document.getElementById('restaurants');
    element.scrollIntoView();
  }
  return (
    <section className="  bg-gradient-to-r from-[#D4145A] to-[#FBB03B] flex justify-center items-center">
        
        <div className="px-4 mx-auto lg:px-8 xl:px-12 sm:w-4/5">
          <div className="py-8 mx-auto flex flex-col justify-start items-start lg:flex-row lg:justify-between lg:items-center">
            <div className="text-start sm:max-w-md space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                Food delivery in Ranchi
              </h1>
              <p className="text-white lg:pr-16">
                CraveBite provides food delivery service all over the city, in
                which a restaurant,store, or independent food delivery company
                delivers food to a customer.
              </p>

              <div>
                <button className="transition-colors hover:text-[#D4145A] bg-gradient-to-r from-[#EDE574] to-[#E1F5C4] px-3 py-3 text-sm font-semibold text-slate-900 rounded-xl"
                onClick={() => goToRestaurants()}
                >
                  <span>Explore Restaurants</span>
                </button>
              </div>
            </div>

            <div className='hidden lg:block'>
              <img src={Background} className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero