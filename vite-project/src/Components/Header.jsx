// Title component for display logo
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";
import store from "./utils/store";

const Title = () => (
  <a href="/">
    <img
      className="bg-cover size-20  "
      src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-restaurant-logo%2C-restaurant-logo-design-template-33255790cb8e1186b28609dd9afd4ee6_screen.jpg?ts=1668794604"
      alt="logo"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  // const { user } = useContext(UserContext);
  return (
    <div className="shadow-lg max-w-[1240px] flex items-center justify-between bg-black text-white ">
      <Title />
      {/* <p>{user.name}</p> */}
      <div className="w-[500px] mx-10 ">
        <ul className="flex justify-between items-center p-3">
          <li className="text-xl font-medium   hover:text-orange-600 hover:border-b-4  border-orange-700 duration-200 p-1 ">
            <Link to="/">Home</Link>
          </li>
          <li className=" text-xl  font-medium  hover:text-orange-600 hover:border-b-4  border-orange-700 -200 p-1 ">
            <Link to="/about">About Us</Link>
          </li>
          <li className=" text-xl  font-medium  hover:text-orange-600 hover:border-b-4  border-orange-700 duration-200 p-1 ">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className=" text-xl  font-medium  hover:text-orange-600 hover:border-b-4  border-orange-700 duration-200 p-1 ">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="ml-2">
              <Link to="/cart">Cart - {cartItems.length} </Link>
            </span>
          </li>

          <li className=" text-xl mr-4 font-medium  hover:text-orange-600 hover:border-b-4  border-orange-700 duration-200 p-1 ">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
