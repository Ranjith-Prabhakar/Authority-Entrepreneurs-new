import "./navbar.css";
import DownArrowIcon from "../ui/DownArrowIcon";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
export default function () {
  return (
    <>
      <ul className="navbar-wrapper">
        <div className="navbar-item-wrapper">
          <li>Zoffi</li>
          <DownArrowIcon />
        </div>
        <li>Become a Seller</li>
        <div className="navbar-item-wrapper">
          <li>More</li>
          <DownArrowIcon />
        </div>
        <li>Cart</li>
      </ul>
      <ul className="navbar-wrapper-mobile">
        <IoIosSearch />
        <IoPersonOutline />
        <IoCartOutline />
      </ul>
    </>
  );
}
