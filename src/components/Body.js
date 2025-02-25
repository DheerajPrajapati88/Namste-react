import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurant, setRes] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [serachText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

      const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=26.8467126&lng=80.9460872"
      );
      const json = await data.json();
      setRes(
        json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
      
   

  };
  
  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false) return (<h1>You are offline</h1>)
    
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={serachText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(serachText.toLowerCase());
              });
              setFilteredRestaurant(filteredRestaurant);
            }}>
            search
          </button>
        </div>
        <div
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((res) => {
              return res.info.avgRating > 4.2;
            });
            setRes(filteredList);
          }}>
          Top rated restaurant
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
