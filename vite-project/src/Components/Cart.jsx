import { useDispatch, useSelector } from "react-redux";
import "../main.css";
import RestaurantCard from "./RestaurantCard";
import FoodItems from "./FoodItems";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items); //subscribing to cart items

  //clearing cart by a buttonn
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-4xl bg-red-600">cart - {cartItems.length}</h1>

      {cartItems.map((item) => {
        return <FoodItems key={item.id} {...item} />;
      })}
      <button onClick={() => handleClearCart()}>Clear All</button>
    </div>
  );
};

export default Cart;
