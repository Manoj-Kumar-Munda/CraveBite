import React from "react";
import MenuCategory from "./MenuCategory";

const Menu = ({ menu }) => {
  console.log("Inside menu component");
  
  
  

  return (
    <div className="relative">
    
      {menu.map((item, index) => {
        return (
          <MenuCategory key={index} menu={item?.card?.card}/>
        );
      })}
    </div>
  );
};

export default React.memo(Menu);
