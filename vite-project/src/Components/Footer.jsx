import UserContext from "./utils/UserContext";
import { useContext } from "react";
// Footer component for footer section

const Footer = () => {
  const { user } = useContext(UserContext);
  const year = new Date().getFullYear();
  return (
    <div className="footer flex flex-col justify-center items-center gap-2">
      <p className="block">{user.email}</p>
      Created By
      <i className="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/chetannada/" target="_blank">
        Anurag Rawat
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <span className="font-bold">Swaadisht</span>
    </div>
  );
};

export default Footer;
