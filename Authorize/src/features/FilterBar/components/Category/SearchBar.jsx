import { IoIosSearch } from "react-icons/io";
import "./searchBar.css";
export default function () {
  return (
    <div className="category-search-bar">
      <input type="text" placeholder="Search Brand..." />
      <IoIosSearch className="category-search-bar-icon" />
    </div>
  );
}
