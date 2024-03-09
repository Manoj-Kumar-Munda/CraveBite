import { useEffect, useState } from "react";
import { CORSPROXY, MENU_API } from "./constants";

// custom hook to fetch restaurantMenu and restaurantInfo and return it
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      CORSPROXY +
        encodeURIComponent(
          MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
        )
    );
    const json = await data.json();
    const resInfo = json?.data?.cards[0]?.card?.card?.info;
    const resDesktopMenu =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
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
