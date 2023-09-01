import React from 'react'

const SortRadio = ({handleOnChange, sortBy }) => {
  return (
    <>
        <form className="absolute bg-white top-full rounded-md right-0 border py-2 px-6 space-y-2 shadow-lg">
                <div className="flex items-center justify-between w-32">
                  <label htmlFor="relevance">
                    <span>Relevance</span>
                  </label>

                  <input
                    type="radio"
                    name="sortBy"
                    id="relevance"
                    value="relevance"
                    className={`cursor-pointer appearance-none ring-2 ring-slate-300 ring-offset-2 w-3 h-3 rounded-full ${
                      sortBy === "relevance"
                        ? "bg-orange-500 ring-orange-500"
                        : "bg-white"
                    } `}
                    checked={sortBy === "relevance"}
                    onChange={(e) => handleOnChange(e)}
                  />
                </div>

                <div className="flex items-center justify-between w-32">
                  <label htmlFor="deliveryTime">
                    <span className="whitespace-nowrap">Delivery Time</span>
                  </label>

                  <input
                    type="radio"
                    name="sortBy"
                    id="deliveryTime"
                    value="deliveryTime"
                    className={`cursor-pointer appearance-none ring-2 ring-slate-300 ring-offset-2 w-3 h-3 rounded-full ${
                      sortBy === "deliveryTime"
                        ? "bg-orange-500 ring-orange-500"
                        : "bg-white"
                    } `}
                    checked={sortBy === "deliveryTime"}
                    onChange={(e) => handleOnChange(e)}
                  />
                </div>

                <div className="flex items-center justify-between w-32">
                  <label htmlFor="rating">
                    <span>Rating</span>
                  </label>

                  <input
                    type="radio"
                    name="sortBy"
                    id="rating"
                    value="rating"
                    className={`cursor-pointer appearance-none ring-2 ring-slate-300 ring-offset-2 w-3 h-3 rounded-full ${
                      sortBy === "rating"
                        ? "bg-orange-500 ring-orange-500"
                        : "bg-white"
                    } `}
                    checked={sortBy === "rating"}
                    onChange={(e) => handleOnChange(e)}
                  />
                </div>

                <div className="flex items-center justify-between w-32">
                  <label htmlFor="costForTwo">
                    <span>Cost For Two</span>
                  </label>

                  <input
                    type="radio"
                    name="sortBy"
                    id="costForTwo"
                    value="costForTwo"
                    className={`cursor-pointer appearance-none ring-2 ring-slate-300 ring-offset-2 w-3 h-3 rounded-full ${
                      sortBy === "costForTwo"
                        ? "bg-orange-500 ring-orange-500"
                        : "bg-white"
                    } `}
                    checked={sortBy === "costForTwo"}
                    onChange={(e) => handleOnChange(e)}
                  />
                </div>
              </form>
    </>
  )
}

export default SortRadio