import React, { useEffect, useMemo, useState } from "react";
import {
  RESTAURANT_LIST_DESKTOP,
  RESTAURANT_LIST_MOBILE,
} from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSort } from "@fortawesome/free-solid-svg-icons";
import Shimmer from "./Shimmer";
import NotFound from "../assets/notFound.png";
import {
  isMobile,
  sortByCost,
  sortByDeliveryTime,
  sortByRating,
} from "../utils/helperFunctions";
import SortRadio from "./SortRadio";

const Restaurants = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("relevance");
  const [showSort, setShowSort] = useState(false);

  const toggleShowSort = () => {
    setShowSort(!showSort);
  };

  const sortByRelevance = () => {
    setFilteredList(restaurantList);
  };

  useEffect(() => {
    getResList();
  }, []);

  useEffect(() => sortRes(), [sortBy]);

  const handleOnChange = (e) => {
    setSortBy(e.target.value);
    setShowSort(false);
  };

  const sortRes = () => {
    switch (sortBy) {
      case "deliveryTime":
        setFilteredList(sortByDeliveryTime(restaurantList));
        break;
      case "rating":
        setFilteredList(sortByRating(restaurantList));
        break;
      case "costForTwo":
        setFilteredList(sortByCost(restaurantList));
        break;
      default:
        sortByRelevance();
    }
  };

  async function getResList() {
    try {
      const list = await fetch(
        isMobile()
          ? RESTAURANT_LIST_MOBILE
          : RESTAURANT_LIST_DESKTOP
      );
      const json = await list.json();

      let resList;

      if (isMobile()) {
        resList =
          json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
            ?.restaurants;
      } else {
        const list0 =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        const list1 =
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        const list2 =
          json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        resList = list0 || list1 || list2;
      }
      setRestaurantList(resList);
      setFilteredList(resList);
    } catch (e) {
      console.log("There was an error");
    }
  }

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setSearchText(searchQuery);

    searchResult(searchQuery);
  };

  function searchResult(query) {
    try {
      const res = restaurantList.filter((item) =>
        item?.info?.name.toLowerCase().includes(query.toLowerCase())
      );
      res.length === 0
        ? setError({
            type: "search",
            message: "No match found",
          })
        : setError(null);
      setFilteredList(res);
    } catch (e) {
      throw new Error(e);
    }
  }

  return (
    <>
      <div className="mx-auto my-6 lg:my-10 md:w-4/5 overflow-hidden">
        <div className="mx-auto w-full flex justify-between items-center py-2 px-2 border-b">
          <div className="flex bg-white rounded-3xl px-4 py-2 gap-2 border focus-within:border-[#E75E4C]">
            <div className="">
              <input
                className=" bg-white text-slate-600  caret-[#E75E4C] border-none outline-none placeholder:text-text-slate-600 placeholder:text-sm"
                placeholder="Search restaurant"
                value={searchText}
                onChange={(e) => handleSearch(e)}
              />
            </div>
            <div>
              <button className="border-0 text-slate-900">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "#E75E4C" }}
                  onClick={() => {
                    searchResult();
                  }}
                />
              </button>
            </div>
          </div>

          <div className="relative">
            <button
              className="flex gap-2 items-center focus:border p-2"
              onClick={() => toggleShowSort()}
            >
              <span className="text-sm font-bold text-orange-500">SORT</span>
              <FontAwesomeIcon icon={faSort} />
            </button>

            {showSort ? (
              <SortRadio sortBy={sortBy} handleOnChange={handleOnChange} />
            ) : null}
          </div>
        </div>

        <div id="restaurants" className="flex justify-center w-full mt-4">
          {error ? (
            <div className="flex flex-col justify-center bg-red space-y-4">
              <img src={NotFound} className="w-56" />
              <p className="text-center">{error.message}</p>
            </div>
          ) : (
            <div className="basis-full">
              <div className="grid justify-items-center grid-cols-[repeat(auto-fill,minmax(280px,1fr))]  gap-y-12 lg:gap-x-8 md:gap-x-12">
                {!filteredList || filteredList.length === 0
                  ? [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <Shimmer key={i} />
                    ))
                  : filteredList.map((item) => (
                      <RestaurantCard key={item?.info?.id} data={item?.info} />
                    ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Restaurants;
