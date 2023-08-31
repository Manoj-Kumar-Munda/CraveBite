import React, { useState } from "react";
import MenuCategory from "./MenuCategory";

const Menu = ({ menu }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(menu);
  
  return (
    <div className="relative bg-gray-100">
    
      {menu.map((item, index) => {
        return (
          <MenuCategory 
            key={index} menu={item?.card?.card} 
            isActive={activeIndex === index} 
            closeCategory = {() => setActiveIndex(null)}
            setActiveIndex={() => setActiveIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default React.memo(Menu);
