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
      `${MENU_API}restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );

    const json = await data.json();
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
