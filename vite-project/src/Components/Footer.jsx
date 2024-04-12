import UserContext from "./utils/UserContext";
import { useContext } from "react";
// Footer component for footer section

const Footer = () => {
  const { user } = useContext(UserContext);
  const year = new Date().getFullYear();
  return (
    <div className=" footer text-center font-[poppins] mt-20 mb-4">
      <p className="block text-lg">{user.email}</p>
      Created By
      <i className="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/AnuragRawt🚀/" target="_blank">
        <p className="text-lg font-bold">AnuragRawat🚀</p>
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <span className="font-bold">Swaadisht</span>
    </div>
  );
};

export default Footer;
