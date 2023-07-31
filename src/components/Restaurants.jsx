import React, { useEffect, useMemo, useState } from "react";
import { RESTAURANT_LIST_DESKTOP } from "../utils/constants";
import { useAsyncError, useSearchParams } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Hero from "./Hero";
import Shimmer from "./Shimmer";
import NotFound from "../assets/notFound.png";

const Restaurants = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("");

  const sortByDeliveryTime = () => {
    console.log("sortingBy delivery time");
    const data = [...restaurantList];
    const result = data.sort(
      (item1, item2) =>
        item1?.info?.sla?.deliveryTime - item2?.info?.sla?.deliveryTime
    );
    setFilteredList(result);
  };

  const sortByRating = () => {
    const data = [...restaurantList];
    const result = data.sort(
      (item1, item2) => item1?.info?.avgRating - item2?.info?.avgRating
    );
    setFilteredList(result);
  };

  const sortByCost = () => {
    const data = [...restaurantList];
    const result = data.sort(
      (item1, item2) =>
        parseInt(item1?.info?.costForTwo.match(/\d+/)[0], 10) -
        parseInt(item2?.info?.costForTwo.match(/\d+/)[0], 10)
    );
    console.log(result);
    setFilteredList(result);
  };

  const sortByRelevance = () => {
    setFilteredList(restaurantList);
  };

  useEffect(() => {
    getResList();
  }, []);

  useEffect(() => sortRes(), [sortBy]);

  const sortRes = () => {
    switch (sortBy) {
      case "deliveryTime":
        console.log("sort by delivery");
        sortByDeliveryTime();
        break;
      case "rating":
        console.log("sortByRating");
        sortByRating();
        break;
      case "costForTwo":
        console.log("sortByCost...");
        sortByCost();
        break;
      default:
        sortByRelevance();
    }
  };

  async function getResList() {
    try {
      const list = await fetch(
        "https://corsproxy.io/?" + RESTAURANT_LIST_DESKTOP
      );
      const json = await list.json();
      const desktopData =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(desktopData);
      if (!desktopData) {
        setError({
          type: "fetch",
          message: "Failed to fetch restaurant data",
        });
      } else {
        setError(null);
      }
      setRestaurantList(desktopData);
      setFilteredList(desktopData);
    } catch (e) {
      throw new Error(e);
    }
  }

  function searchResult() {
    try {
      const res = restaurantList.filter((item) =>
        item?.info?.name.toLowerCase().includes(searchText.toLowerCase())
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

  const sort = (e) => {
    console.log(e.target.value);
    setSortBy(e.target.value);
  };

  return (
    <>
      <div className="mx-auto  lg:p-8 overflow-hidden">
        <div className="mx-auto flex justify-between items-center py-2 px-2 border-b">
          <div className="flex bg-white rounded-3xl px-4 py-2 space-x-2 border focus-within:border-[#E75E4C]">
            <div className="">
              <input
                className="w-56 bg-white text-slate-600  caret-[#E75E4C] border-none outline-none placeholder:text-text-slate-600 placeholder:text-sm"
                placeholder="Search restaurant"
                value={searchText}
                onBlur={() => searchResult()}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  searchResult();
                }}
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

          <div>
            <ul className="flex space-x-10">
              <li className="">
                <select
                  value={sortBy}
                  onChange={(e) => sort(e)}
                  className="px-2 py-2 rounded-lg border-2 border-red-400 focus:outline-none focus:border-red-200"
                >
                  <option value="relevance">Relevance</option>
                  <option value="deliveryTime">Delivery Time</option>
                  <option value="rating">Rating</option>
                  <option value="costForTwo">Cost For Two</option>
                </select>
              </li>
             
            </ul>
          </div>
        </div>

        <div id="restaurant" className="flex justify-center w-full mt-4">
          {error ? (
            <div className="flex flex-col justify-center bg-red space-y-4">
              <img src={NotFound} className="w-56" />
              <p className="text-center">{error.message}</p>
              <button onClick={() => location.reload()}>Refresh</button>
            </div>
          ) : (
            <div className="max-w-full mx-auto grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-y-12 lg:gap-x-8 md:gap-x-12">
              {filteredList.length === 0
                ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <Shimmer key={i} />
                  ))
                : filteredList.map((item, index) => (
                    <RestaurantCard
                      key={item?.info?.id}
                      data={item?.info}
                    />
                  ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Restaurants;
