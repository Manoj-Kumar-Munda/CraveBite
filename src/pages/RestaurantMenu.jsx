import React, { useEffect, useState } from "react";
import RestaurantInfo from "../components/RestaurantInfo";
import Menu from "../components/Menu";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [resMenu, setResMenu] = useState([]);
  const [resInfo, setResInfo] = useState({});

  useEffect(() => {
    getRestaurantMenu();
    () => window.scrollTop(0);
  }, []);

  const getRestaurantMenu = async () => {
    const data = await fetch(
      MENU_API + id + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    const resInfo = json?.data?.cards[0]?.card?.card?.info;
    const resMenu =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    setResInfo(resInfo);
    setResMenu(resMenu);
  };

  return (
    <div>
      <div className="relative max-w-4xl mx-auto my-5">
        {resMenu.length === 0 ? (
          <h1>Loading....</h1>
        ) : (
          <>
            <RestaurantInfo info={resInfo} />
            <Menu menu={resMenu} />
            
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
