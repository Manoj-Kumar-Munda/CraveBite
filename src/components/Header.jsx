import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

import React from "react";
import { useSelector } from "react-redux";

//subscribing to the store using useSelector hook

const Header = () => {
  const totalItems = useSelector((store) => store.cart.totalItems);
  return (
    <div className="fixed px-3 lg:px-8 h-16 top-0 left-0 right-0 flex justify-between items-center bg-black z-50">
      <div className="h-full py-3 lg:py-2 ">
        <Link to={"/"}>
          <img className="w-full h-full" src={logo} loading="lazy" />
        </Link>
      </div>

      <div>
        <button className="flex items-center space-x-3 pr-2 md:pr-0">
          <Link to={"cart"}>
            <div className="relative">
              <FontAwesomeIcon
                icon={faBagShopping}
                style={{ color: "#ffffff" }}
              />

              <span className="absolute text-center -right-2 -top-1 text-xs font-bold bg-[#D4145A] text-white rounded-full w-4 h-4">
                {totalItems}
              </span>
            </div>
          </Link>

          <span className="hidden md:inline-block font-semibold text-white">Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
