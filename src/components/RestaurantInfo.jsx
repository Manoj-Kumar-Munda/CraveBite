import React from "react";
import { faClock, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurantInfo = ({ info }) => {
  console.log("Inside resInfo container");

  const {
    locality,
    name,
    costForTwoMessage,
    avgRating,
    areaName,
    totalRatings,
    sla: { deliveryTime },
  } = info;
  console.log(
    locality,
    name,
    costForTwoMessage,
    avgRating,
    areaName,
    totalRatings,
    deliveryTime
  );
  return (
    <div className="space-y-5">
      <div className="flex justify-between">
        <div className="flex flex-col space-y-2">
          <div>
            <h1 className="font-bold">{name}</h1>
          </div>
          <div>
            <p className="text-xs">Indian</p>
            <p className="text-xs">{locality}</p>
          </div>
        </div>

        <div className="bg-white border flex flex-col justify-center px-2 rounded-lg">
          <div className="text-center">
            <span className="text-green-600 font-extrabold text-sm">
              <span>&#9733; </span>
              {avgRating}
            </span>
          </div>
          <span className=" border-b border-slate-300"></span>
          <div>
            <span className="text-xs font-semibold text-slate-400">
              1K+ ratings
            </span>
          </div>
        </div>
      </div>

      <div className="w-full border border-dashed"></div>

      <div>
        <div className="flex space-x-3 items-center">
          <div className="space-x-2">
            <FontAwesomeIcon icon={faClock} size="xl" />
            <span className="font-bold text-sm">{deliveryTime} minutes</span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-6 border border-slate-900 rounded-full text-center">
              <FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />
            </div>
            <span className="font-bold text-sm">{costForTwoMessage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
