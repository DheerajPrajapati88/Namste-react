import { useState } from "react";
import { menu_api } from "./constants";
import { useState,useEffect } from "react";


const useRestaurantMenu=()=>{

    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{

        const data=await fetch(menu_api + resId);
        const json= await data.json();

        setResInfo(json.data);
    }

    return resInfo;
}
export default useRestaurantMenu;