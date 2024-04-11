import RestaurantCard from "./RestaurantCard";
import {
  useContext,
  useEffect,
  useState,
} from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";
import useOnline from "./utils/useOnline";
import { RestaurantCards } from "../constants";
import UserContext from "./utils/UserContext";

// Body Component for body section: It contain all restaurant cards
const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { user, setUser } = useContext(UserContext);

  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getRestaurants();
  }, []);
  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(RestaurantCards);
      const json = await response.json();
      console.log(json);

      const headerItems =
        json?.data?.cards[0]?.card?.card?.imageGridCards?.info;
      // console.log(headerItems);

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };
  //check if user is offline then it shows that message for that we have made a custom hook -> useOnline hook
  const isOnline = useOnline();
  if (!isOnline) {
    console.log("Offline: Rendering message");
    return (
      <div className="bg-red-600 text-white text-2xl font-bold flex justify-center items-center h-screen">
        <span>Offline, Plz check your internet Connection!!!</span>
      </div>
    );
  }
  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;

  return (
    <>
      <div className="bg-slate-50 my-4 flex justify-center items-center">
        <input
          type="text"
          className="px-5 py-3 border font-[poppins] border-black rounded-l-full focus:outline-none w-[250px] md:w-[500px]  text-lg"
          placeholder="Search for restaurants"
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>

        {/* <input
          value={user.name}
          onChange={(e) =>
            setUser({
              name: e.target.value,
              email: "new email",
            })
          }
        /> */}
        <button
          className="rounded-r-full  px-2 md:px-3 py-[13px] w-16 md:w-20 bg-blue-400 hover:bg-blue-700 text-white  text-xl duration-300 "
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {/***headlineCards */}

      {errorMessage && <div class="error-container">{errorMessage}</div>}

      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className=" grid md:grid-rows-4 grid-rows-2 md:grid-cols-4 grid-cols-2 mx-4 md:mx-24 bg-slate-50  md:gap-y-8 gap-x-2 gap-y-10 my-0 md:my-8">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}

          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurants/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
