import { swiggy_URL_menu, image_URL } from "../constants";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const restaurant = useRestaurant(id);

  return (
    <div className="menu">
      <div>
        <h1>Restaurant id :{id}</h1>
        <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
        <img
          src={
            image_URL +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info?.city}</h3>
      </div>
      <div className="flex">
        <h1>Menu</h1>
        <ul className="flex">
          {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
            (item) => (
              <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
