import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useJoin } from "../utils/useJoin";
import { useDispatch, useSelector } from "react-redux";

const MenuCategory = ({ menu, isActive, closeCategory, setActiveIndex }) => {
  
  const { title, itemCards, categories } = menu;

  const isVeg = useSelector((store) => store.item.isVegOnly);

  return (
    <div className="bg-white">
      <div
        id={useJoin(title)}
        className={
          `flex justify-between my-4 py-2 bg-red-400` +
          (itemCards && "border-b cursor-pointer")
        }
        onClick={() => {
          isActive ? closeCategory() : setActiveIndex();
        }}
      >
        <span className="text-lg font-bold">
          {itemCards ? title + `(${itemCards.length})` : title}
        </span>
        {itemCards && (
          <div>
            {isActive ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronUp} />
            )}
          </div>
        )}
      </div>
      {isActive ? (
        <div>
          {itemCards
            ? itemCards.map((item, index) =>
                isVeg ? (
                  item?.card?.info?.isVeg ? (
                    <ItemCard
                      key={item?.card?.info?.id}
                      item={item?.card?.info}
                    />
                  ) : null
                ) : (
                  <ItemCard
                    key={item?.card?.info?.id}
                    item={item?.card?.info}
                  />
                )
              )
            : categories
            ? categories.map((item, index) => (
                <MenuCategory
                  key={title}
                  menu={item}
                  isActive={isActive}
                  closeCategory={closeCategory}
                  setActiveIndex={setActiveIndex}
                />
              ))
            : null}
        </div>
      ) : null}
    </div>
  );
};

export default MenuCategory;
