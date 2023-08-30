import React, { useState } from "react";
import { RESTAURANT_IMG_CDN } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addItem, addQuantity, removeQuantity } from "../utils/cartSlice";
import { useParams } from "react-router-dom";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const items = useSelector((store) => store.cart.items);

  const foodItem = items.find((element) => element.id === item.id);
  

  const {
    name,
    price,
    showImage,
    imageId,
    description,
    inStock,
    defaultPrice,
  } = item;

  const handleAdd = () => {
    dispatch(addItem({ ...item, quantity: 1 }));
  };

  const increaseQuantity = () => {
    dispatch(addQuantity(item));
  };

  const reduceQuantity = () => {
    dispatch(removeQuantity(item));
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
            <span className=" text-slate-500 text-xs line-clamp-2">
              {description}
            </span>
            {/* <span >Serves 1 | Cottage cheese marinated in Indian pickle spice, cooked in Tandoori. The soft and juicy Cottage Cheese coated with spicy and tangy masala is a delight to eat.</span> */}
          </div>
        </div>
        {showImage ? (
          <div className="w-28  max-h-24 shrink-0 relative flex justify-center">
            <img
              loading="lazy"
              src={RESTAURANT_IMG_CDN + imageId}
              alt={name}
              className="w-full h-full object-cover object-center rounded-lg"
            />
            <div className="absolute -bottom-2 w-24 text-center bg-white text-green-600 px-2  py-2 text-xs font-bold border border-slate-300 rounded-lg">
              {!foodItem ? (
                <button className="w-full" onClick={() => handleAdd(item)}>
                  ADD
                </button>
              ) : (
                <button className="w-full">
                  <div className="flex justify-between">
                    <span className="" onClick={() => increaseQuantity()}>
                      <FontAwesomeIcon icon={faPlus} />
                    </span>
                    <span>{foodItem?.quantity}</span>
                    <span onClick={() => reduceQuantity()}>
                      <FontAwesomeIcon icon={faMinus} />
                    </span>
                  </div>
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="self-center shrink-0 w-24 text-center bg-white text-green-600 px-2 py-2 text-xs font-bold border border-slate-300 rounded-lg">
            {!foodItem ? (
              <button className="w-full" onClick={() => handleAdd(item)}>
                ADD
              </button>
            ) : (
              <button className="w-full">
                <div className="flex justify-between">
                  <span className="" onClick={() => increaseQuantity()}>
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                  <span>{foodItem.quantity}</span>
                  <span onClick={() => reduceQuantity()}>
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
