import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

// custom hook to fetch restaurantMenu and restaurantInfo and return it
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3440997&lng=85.309562&restaurantId=696327&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
        
    );

    const json = await data.json();
    console.log("Fetched menu:", json);
    const resInfo = json?.data?.cards[0]?.card?.card?.info;
    console.log("Res info", resInfo);
    const resDesktopMenu =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
        1,
        -2
      );

    const resMobileMenu =
      json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
        1,
        -2
      );
    setResInfo(resInfo);
    setResMenu(resDesktopMenu || resMobileMenu);
  };

  return [resInfo, resMenu];
};

export default useRestaurantMenu;
