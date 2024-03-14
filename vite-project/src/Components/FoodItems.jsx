import { useContext } from "react";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../constants";
import UserContext from "./utils/UserContext";
import { bannerImg } from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  name,

  category,
  price,
  description,
  imageId,

  avgRating,
}) => {
  // const { user } = useContext(UserContext);
  return (
    <div>
      <div className=" border border-solid border-black  hover:scale-95  duration-300 p-4 rounded-2xl">
        <img className="rounded-[20px]" src={ITEM_IMG_CDN_URL + i} />
        <h2 className="text-xl font-semibold mt-3">{name}</h2>
        <div className="my-1">
          <span className="p-1 text-sm bg-green-600 hover:bg-green-700 rounded-xl font-bold  mr-2 text-white">
            <i class=" text-white text-lg fa-regular mr-1 fa-star"></i>
            {avgRating}
          </span>
        </div>
        <h5 className="mt-1">{category}</h5>
        <h6>{price}</h6>

        <h4 className="font-bold text-xl my-1">{description}</h4>
        {/* <h5>{user.name}</h5>
        <h5>{user.email}</h5> */}
      </div>
    </div>
  );
};

export default RestaurantCard;
