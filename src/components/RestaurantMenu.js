import React, { useState } from 'react'
import { useEffect } from 'react';
import Shimmer from './Shimmer';
function RestaurantMenu() {

    const [resInfo,setResInfo]=useState(null)
    useEffect(()=>{
        
        fetchMenu();

    },[])

    const fetchMenu=async()=>{
        const data=await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=425&submitAction=Enter');
         const json= await data.json();
         console.log(json)
         setResInfo(json.data);
    }
    if (resInfo===null) return(<Shimmer/>);
    const {name,cusines,cloudinaryImageId,costForTwoMessage,rating}=resInfo?.cards[0]?.card?.card?.info;

    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return  (
    <div className='menu'>
        <h1>{name}</h1>
        <h2>{cusines}</h2>
        <h3>{costForTwoMessage}</h3>
        <ul>
            <li>biryani</li>
            <li>Burger</li>
            <li>Diet Coke</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu