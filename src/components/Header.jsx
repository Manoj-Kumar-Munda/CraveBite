import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";


import React from 'react'

const Header = () => {
  return (
    <div className="sticky bg-slate-900 px-4 py-2 h-14 top-0 left-0 right-0  flex justify-between items-center  bg-slate-700/20 z-50">
  <div className="h-full">
    <img className="w-full h-full" src={logo} />
  </div>

  <div className="hidden lg:block">
    <ul className=" flex items-center space-x-8">
      <li>
        <Link
          to={"/"}
          href="#"
          className="text-white font-semibold hover:text-[#EDE574] transition-colors"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to={"/blog"}
          href="#"
          className="text-white font-semibold hover:text-[#EDE574] transition-colors"
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          to={"/about"}
          className="text-white font-semibold hover:text-[#EDE574] transition-colors"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to={"/contact"}
          className="text-white font-semibold hover:text-[#EDE574] transition-colors"
        >
          Contact
        </Link>
      </li>
    </ul>
  </div>

  <div>
    <button className="flex items-center space-x-3">
      <div className="relative">
        <FontAwesomeIcon icon={faBagShopping} style={{ color: "#ffffff" }} />

        <span className="absolute text-center -right-2 -top-1 text-xs font-bold bg-[#D4145A] text-white rounded-full w-4 h-4">
          2
        </span>
      </div>

      <span className="font-semibold text-white">Cart</span>
    </button>
  </div>
</div>

    
  )
}

export default Header

