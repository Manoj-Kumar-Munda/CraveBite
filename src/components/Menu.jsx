import React from "react";
import MenuCategory from "./MenuCategory";

const Menu = ({ menu }) => {
  console.log("Inside menu component");
  
  const itemsList = menu.slice(1, -2);
  

  return (
    <div className="relative">
    
      {itemsList.map((item, index) => {
        return (
          <MenuCategory key={index} menu={item?.card?.card}/>
        );
      })}
    </div>
  );
};

export default React.memo(Menu);
