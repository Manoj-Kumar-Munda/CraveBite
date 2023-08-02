import React, { useState } from "react";
import { RESTAURANT_IMG_CDN } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const ItemCard = ({ item }) => {
  const [orderQuantity, setOrderQuantity] = useState(0);
  // console.log("Item component");
  // console.log(item);

  const {
    name,
    price,
    showImage,
    imageId,
    description,
    inStock,
    defaultPrice,
  } = item;

  const addItem = () => {
    setOrderQuantity(1);
  };
  const addQuantity = () => {
    setOrderQuantity(orderQuantity + 1);
  };

  const removeQuantity = () => {
    setOrderQuantity(orderQuantity - 1);
  };

  return (
    <div className="">
      <div className="flex justify-between border-b gap-2 py-4">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col">
            <span className="font-semibold">{name}</span>
            <span className="text-sm">
              ₹ {price / 100 || defaultPrice / 100}
            </span>
          </div>
          <div>
            <span className=" text-slate-500 text-xs">{description}</span>
            {/* <span >Serves 1 | Cottage cheese marinated in Indian pickle spice, cooked in Tandoori. The soft and juicy Cottage Cheese coated with spicy and tangy masala is a delight to eat.</span> */}
          </div>
        </div>
        {showImage ? (
          <div className="w-28  max-h-24 shrink-0 relative flex justify-center">
            <img
              src={RESTAURANT_IMG_CDN + imageId}
              alt={name}
              className="w-full h-full object-cover object-center rounded-lg"
            />
            <div className="absolute -bottom-2 w-24 text-center bg-white text-green-600 px-2  py-2 text-xs font-bold border border-slate-300 rounded-lg">
              {orderQuantity === 0 ? (
                <button className="w-full" onClick={() => addItem()}>
                  ADD
                </button>
              ) : (
                <button className="w-full">
                  <div className="flex justify-between">
                    <span className="" onClick={() => addQuantity()}>
                      <FontAwesomeIcon icon={faPlus} />
                    </span>
                    <span>{orderQuantity}</span>
                    <span onClick={() => removeQuantity()}>
                      <FontAwesomeIcon icon={faMinus} />
                    </span>
                  </div>
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="self-center w-24 text-center bg-white text-green-600 px-2 py-2 text-xs font-bold border border-slate-300 rounded-lg">
            {orderQuantity === 0 ? (
              <button className="w-full" onClick={() => addItem()}>
                ADD
              </button>
            ) : (
              <button className="w-full">
                <div className="flex justify-between">
                  <span className="" onClick={() => addQuantity()}>
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                  <span>{orderQuantity}</span>
                  <span onClick={() => removeQuantity()}>
                    <FontAwesomeIcon icon={faMinus} />
                  </span>
                </div>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
