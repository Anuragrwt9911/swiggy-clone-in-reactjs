import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import { ITEM_IMG_CDN_URL } from "../constants";
import "/src/main.css";
import MenuShimmer from "./MenuShimmer";
import useRestaurant from "./utils/useRestaurant";

const FoodItems = () => {
  // const handleAddItem = () => {
  //   dispatch(addItem("grapes"));
  // };

  const { resId } = useParams();

  const resInfo = useRestaurant(resId);

  if (resInfo === null) return <MenuShimmer />;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <div className=" mt-8">
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
                  //passing each item which is mapped.
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

export default FoodItems;
