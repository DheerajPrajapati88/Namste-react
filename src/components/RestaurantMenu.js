import React, { useState } from 'react'
import { useEffect } from 'react';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestauranMenu';
function RestaurantMenu() {

 const {resId}=useParam(); 
const resInfo=useRestaurantMenu(resId);
 
    if (resInfo===null) return(<Shimmer/>);
    const {name,cusines,cloudinaryImageId,costForTwoMessage,vegFilter}=data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.card;

    const {itemCards}=data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.card;
  return  (
    <div className='menu'>
        <h1>{name}</h1>
        <h2>{cusines}</h2>
        <h3>{vegFilter}</h3>
        <ul>
            <li>biryani</li>
            <li>Burger</li>
            <li>Diet Coke</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu