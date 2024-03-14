import { useEffect, useState } from "react";
import { swiggy_menu_api_URL } from "../constants";
import { menuAPI } from "../constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import { ITEM_IMG_CDN_URL } from "../constants";
import "/src/main.css";
import MenuShimmer from "./MenuShimmer";
import useRestaurant from "./utils/useRestaurant";
import { addItem } from "./utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const dispatch = useDispatch();

  // const handleAddItem = () => {
  //   dispatch(addItem("grapes"));
  // };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurant(resId);

  if (resInfo === null) return <MenuShimmer />;
  {
    /**Destructing object  */
  }
  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);
  {
    /**now we have items cards which are 20 cards and we have to map over it to print the anme of all cards */
  }

  return (
    <div className=" mt-8">
      <div className="mx-10 h-[400px] w-[500px]  bg-slate-100 mb-3 flex flex-col justify-center items-center">
        <img
          className="h-[400px} w-[400px] object-cover rounded-md"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <span className="text-xl font-bold mb-2">{name}</span>
        <span className="text-lg font-medium mb-2">{cuisines.join(" , ")}</span>
        <span className="text-lg font-medium mb-2 bg-red-700 px-3 py-2 rounded-full text-white hover:bg-red-800 cursor-pointer">
          {costForTwoMessage}
        </span>
      </div>

      <div className="mx-10 bg-slate-50">
        {/**looping over the menu names -we iterates over itemcards[0] index that why we take itemcards[0] as item we can also print price by because format is same */}
        {itemCards.map((item) => {
          return (
            <div
              className="flex justify-between items-center  border-y border-solid border-black p-4 mx-10"
              key={item?.card?.info?.id}
            >
              <div className="flex justify-between gap-2 flex-col">
                <span className="text-xl font-bold ">
                  {item?.card?.info?.name}
                </span>
                <h2 className="text-lg font-medium ">
                  {" "}
                  ₹ {item?.card?.info?.price / 100}
                </h2>
                {item?.card?.info?.ratings?.aggregatedRating?.rating && (
                  <span className="flex justify-center items-center font-bold w-14 bg-green-500 text-white rounded-md hover:bg-green-600 px-2 py-1">
                    <i class=" text-white text-lg fa-regular mr-1 fa-star"></i>{" "}
                    {item?.card?.info?.ratings?.aggregatedRating?.rating}
                  </span>
                )}
                <span className="mr-8 font-medium p-3 rounded-full px-2 py-1">
                  {item?.card?.info?.description}
                </span>
              </div>

              <div className="flex justify-center items-center flex-col">
                <img
                  className="rounded-md size-28 "
                  src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
                />
                <button
                  onClick={() => addFoodItem(item)} //passing each item which is mapped.
                  className="bg-red-600 text-lg font-bold px-5 py-2 mt-2 rounded-xl hover:bg-red-700 text-white"
                >
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
