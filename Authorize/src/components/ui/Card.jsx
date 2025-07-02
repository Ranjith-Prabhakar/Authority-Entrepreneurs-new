import "./card.css";
import Rating from "./Rating";
import RupeeIcon from "./RupeeIcon";
import { CiHeart } from "react-icons/ci";
export default function Card({ image, title, description, price, rating }) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt="" />
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p className="card-description"> {description}</p>
        <h4 className="card-price">
          <RupeeIcon />
          {price}
        </h4>
        <div className="rating-review">
          <Rating rating={rating.rate} />
          <h5 className="">{`( ${rating.count} )`}</h5>
        </div>
      </div>
      <div className="wishlist-icon-wrapper">
        <CiHeart className="wishlist-icon" color="#667085" />
      </div>
    </div>
  );
}
