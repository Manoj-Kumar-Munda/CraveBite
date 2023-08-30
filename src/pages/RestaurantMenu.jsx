import React, { useEffect, useState } from "react";
import RestaurantInfo from "../components/RestaurantInfo";
import Menu from "../components/Menu";
import { useParams } from "react-router-dom";
import { useJoin } from "../utils/useJoin";
import useRestaurantMenu from "../utils/useRestarurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();


  const [ resInfo, resMenu] = useRestaurantMenu(id)
  const [showBrowseMenu, setShowBrowseMenu] = useState(false);
  // console.log(resMenu);



  useEffect( () => {
    window.scrollTo(top)
  } ,[])

  

  const handleBrowseMenu = () => {
    const body = document.querySelector("body");
    body.classList.toggle("overflow-hidden");
    setShowBrowseMenu(!showBrowseMenu);
  };

  const jumpToMenu = (e) => {
    const body = document.querySelector("body");
    body.classList.toggle("overflow-hidden");
    
    const element = document.querySelector(`#${e.target.dataset.category}`);
    element.scrollIntoView();
    setShowBrowseMenu(false); 
  };

  return (
    <div>
      <div className="relative lg:w-3/5 md:w-4/5 mx-auto my-5 px-4 ">
        {resMenu.length === 0 ? (
          <h1>Loading....</h1>
        ) : (
          <>
            <RestaurantInfo info={resInfo} />
            <Menu menu={resMenu} />
            {showBrowseMenu ? (
              <div
                className="fixed inset-0 min-h-screen w-full bg-black/20 z-50 flex justify-center"
                onClick={() => handleBrowseMenu()}
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  id="browse-menu"
                  className="absolute bottom-6 h-full max-h-80 bg-white w-full max-w-md rounded-xl shadow-lg overflow-y-auto p-2 scrollbar-thin scrollbar-track-[#F5F5F5] scrollbar-thumb-[#FBB03B]"
                >
                  {resMenu.map((item, index) => (
                    <div key={index} className="px-2 mx-auto">
                      <span className="cursor-pointer text-sm font-semibold" onClick={(e) => jumpToMenu(e)} data-category={useJoin(item?.card?.card?.title)}>
                        {item?.card?.card?.title}
                      </span>
                    </div>
                  ))}
                  
                </div>
              </div>
            ) : null}
            <div className="fixed bottom-4 left-0 right-0 text-center">
              <button
                className="bg-blue-500 text-white font-bold text-sm px-6 py-3 rounded-3xl transition-colors hover:bg-blue-600"
                onClick={() => handleBrowseMenu()}
              >
                BROWSE MENU
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
