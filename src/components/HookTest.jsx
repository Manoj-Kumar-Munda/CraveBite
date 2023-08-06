import React, { useState } from 'react'
import useRestaurantMenu from '../utils/useRestarurantMenu'

const HookTest = () => {

    const [resInfo, resMenu] = useRestaurantMenu('81408');
    console.log(resInfo);
    console.log(resMenu)
  return (
    <div>HookTest</div>
  )
}

export default HookTest