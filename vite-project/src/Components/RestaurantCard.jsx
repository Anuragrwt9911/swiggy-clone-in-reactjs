import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "./utils/UserContext";
import { bannerImg } from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  sla,
  costForTwo,
  avgRating,
}) => {
  // const { user } = useContext(UserContext);
  return (
    <div className="md:w-full  w-[10rem] font-[poppins] md:shadow-none shadow-md rounded-xl ">
      <div className="  hover:scale-95  duration-300  p-2">
        <img
          className="rounded-[20px] h-[70px] w-[100px] object-cover md:h-[150px] md:w-full"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h2 className="text-xl font-medium mt-3">{name}</h2>
        <div className="my-1">
          <span className="p-1 text-sm bg-green-600 hover:bg-green-700 rounded-xl font-bold  mr-2 text-white">
            <i class=" text-white text-lg fa-regular mr-1 fa-star"></i>
            {avgRating}
          </span>
          <span className=" ">.{sla.deliveryTime} min</span>
        </div>
        <h5 className="mt-1">{cuisines.slice(0, 0 + 2).join(", ")}</h5>
        <h6>{area}</h6>

        <h4 className="font-semibold text-xl my-1">{costForTwo}</h4>
        {/* <h5>{user.name}</h5>
        <h5>{user.email}</h5> */}
      </div>
    </div>
  );
};

export default RestaurantCard;
