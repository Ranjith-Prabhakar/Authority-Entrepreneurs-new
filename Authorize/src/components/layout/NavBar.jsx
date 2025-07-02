import "./navbar.css";
import DownArrowIcon from "../ui/DownArrowIcon";
export default function () {
  return (
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
  );
}
