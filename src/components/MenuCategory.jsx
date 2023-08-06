import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useJoin } from "../utils/useJoin";

const MenuCategory = ({ menu }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  // const [vegItems, setVegItems] = useState([]);

  const { title, itemCards, categories } = menu;
 
  console.log("Inside MenuCategory");
  console.log(menu);

  // useEffect(() => {
  //   filterVeg();
  // }, [])

  // const filterVeg = () => {
  //   console.log("inside filter veg");
  //   // const result = itemCards.filter((item) => item?.card?.info?.itemAttribute?.vegClassifier === "VEG")
  //   // console.log(result);
  //   if(itemCards){
  //     const result = itemCards.filter( (item) => item?.card?.info?.isVeg)
  //     console.log(result);
  //     setVegItems(result);
  //   }
  

  // }
  
  return (
    <div>
      <div
        id={useJoin(title)}
        className={
          `flex justify-between my-4 py-2` +
          (itemCards && "border-b cursor-pointer")
        }
        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
      >
        <span className="text-lg font-bold">{(itemCards)?(title+`(${itemCards.length})`):(title) }</span>
        {itemCards && (
          <div>
            {isCategoryOpen ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronUp} />
            )}
          </div>
        )}
      </div>
      {isCategoryOpen ? (
        <div>
          {itemCards ? (
            itemCards.map((item, index) => (
              <ItemCard key={item?.card?.info?.id} item={item?.card?.info} />
            ))
          ) : categories ? (
            categories.map((item,index) => <MenuCategory menu={item} key={index} />)
          
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default MenuCategory;
