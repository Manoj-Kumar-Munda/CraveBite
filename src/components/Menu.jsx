import React from "react";
import MenuCategory from "./MenuCategory";

const Menu = ({ menu }) => {
  console.log("Inside menu container");
  const itemsList = menu.slice(1, -2);
  console.log(itemsList);

  return (
    <div>
      {/* <MenuCategory menu={itemsList[0]?.card?.card} />
      <MenuCategory menu={itemsList[1]?.card?.card}/> */}
      {itemsList.map((item, index) => {
        return (
          <MenuCategory key={index} menu={item?.card?.card}/>
        );
      })}
    </div>
  );
};

export default Menu;
