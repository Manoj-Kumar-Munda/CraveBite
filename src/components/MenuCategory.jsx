import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useJoin } from "../utils/useJoin";

const MenuCategory = ({ menu , isActive,closeCategory, setActiveIndex}) => {
  // const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  // const [vegItems, setVegItems] = useState([]);



  const { title, itemCards, categories } = menu;
 
  

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
    <div className="bg-white">
      <div
        id={useJoin(title)}
        className={
          `flex justify-between my-4 py-2 bg-red-400` +
          (itemCards && "border-b cursor-pointer")
        }
        onClick={ () => {
          isActive ? closeCategory() :
          setActiveIndex()
        }}
      >
        <span className="text-lg font-bold">{(itemCards)?(title+`(${itemCards.length})`):(title) }</span>
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
          {itemCards ? (
            itemCards.map((item, index) => (
              <ItemCard key={item?.card?.info?.id} item={item?.card?.info} />
            ))
          ) : categories ? (
            categories.map((item,index) => 
            <MenuCategory 
              key={title}  
              menu={item} 
              isActive={isActive} 
              closeCategory={closeCategory} 
              setActiveIndex={setActiveIndex}
            />)
          
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default MenuCategory;
