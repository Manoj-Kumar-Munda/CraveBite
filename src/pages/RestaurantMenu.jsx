import React, { useEffect, useState } from 'react'
import RestaurantInfo from '../components/RestaurantInfo'
import Menu from '../components/Menu'
import { MENU_API } from '../utils/constants';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const {id} = useParams();

  console.log(id);

  const [resMenu,setResMenu] = useState([]);
  const [resInfo,setResInfo] = useState({});

  useEffect(
    () => {
      getRestaurantMenu();
    },[]
  )

  const getRestaurantMenu = async() => {
    const data = await fetch(MENU_API+id+"&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
    setResInfo(json[0]?.card?.card?.info);
  }
  
  return (
   <>
    <RestaurantInfo />
    <Menu />
   </>
  )
}

export default RestaurantMenu