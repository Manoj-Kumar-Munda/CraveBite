import React from 'react'
import Background from "../assets/take-away-animate.svg";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b lg:bg-gradient-to-r from-[#D4145A] to-[#FBB03B] rounded-b-xl lg:h-auto h-screen lg:block flex justify-center items-center">
        
        <div className=" lg:block px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl lg:p-12 mx-auto flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:items-center">
            <div className="text-center lg:text-start lg:max-w-md space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                Food delivery in Ranchi
              </h1>
              <p className="text-white lg:pr-16">
                CraveBite provides food delivery service all over the city, in
                which a restaurant,store, or independent food delivery company
                delivers food to a customer.
              </p>

              <div>
                <button className="transition-colors hover:text-[#D4145A] bg-gradient-to-r from-[#EDE574] to-[#E1F5C4] px-3 py-3 text-sm font-semibold text-slate-900 rounded-xl">
                  <a href='#restaurant'>Explore Restaurants</a>
                </button>
              </div>
            </div>

            <div>
              <img src={Background} className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero