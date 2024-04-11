// Title component for display logo
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";
import store from "./utils/store";

const Title = () => (
  <div>
    <h1 className="font-bold font-[poppins] text-4xl md:text-6xl p-4 ml-2 cursor-default">
      <span className="font-bold text-red-500">Swad</span>isht
    </h1>
  </div>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [showNavItems, setShowNavItems] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  // const { user } = useContext(UserContext);
  return (
    <div className="h-full w-full z-10  font-[poppins] shadow-lg  flex items-center justify-between bg-black text-white ">
      <Title />
      {/* <p>{user.name}</p> */}
      <button
        onClick={() => setShowNavItems(!showNavItems)}
        className="md:hidden  mr-20"
      >
        {showNavItems ? (
          <i class="text-white text-2xl fa-solid fa-bars"></i>
        ) : (
          <i class="text-white text-2xl fa-solid fa-xmark"></i>
        )}
      </button>

      {!showNavItems && (
        <ul className="flex items-center mr-4 flex-col md:flex-row md:static absolute top-[4rem] right-[2rem] md:bg-transparent md:gap-0 gap-4 bg-white md:text-white text-black md:p-1 p-8  ">
          <li className="text-xl font-medium  mr-3 hover:text-orange-600 duration-500 p-1 ">
            <Link to="/">Home</Link>
          </li>
          <li className=" text-xl mr-3 font-medium hover:text-orange-600 duration-500 p-1 ">
            <Link to="/about">About Us</Link>
          </li>
          <li className=" text-xl mr-3  font-medium  hover:text-orange-600  duration-500 p-1 ">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className=" text-xl mr-3 font-medium  hover:text-orange-600  duration-500 p-1 ">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="ml-2">
              <Link to="/cart">Cart - {cartItems.length} </Link>
            </span>
          </li>

          <li className=" text-xl mr-3 font-medium  hover:text-orange-600 duration-500 p-1 ">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
