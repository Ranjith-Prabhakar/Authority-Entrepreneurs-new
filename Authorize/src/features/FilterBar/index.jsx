import Category from "./components/Category";
import FilterBarHead from "./components/FilterBarHead";
import Price from "./components/Price";
import Rating from "./components/Rating";
import "./filterBar.css";
export default function FilterBar() {
  return (
    <div className="fliter-bar-wrapper">
      <FilterBarHead />
      <div className="category-price-rating-container">
        <Category />
        <Price />
        <Rating />
      </div>
    </div>
  );
}
