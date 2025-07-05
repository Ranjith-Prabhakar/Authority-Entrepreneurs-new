import "./cardRelatedNPopular.css";
import RupeeIcon from "./RupeeIcon";
import { FaStar } from "react-icons/fa";
export default function ({ product }) {
  return (
    <div className="related-n-popular-card-wrapper ">
      <img
        className="related-n-popular-card-image"
        src={product.image}
        alt=""
      />
      <div className="related-n-popular-card-content">
        <h5 className="related-n-popular-card-title">{product.title}</h5>
        <h4 className="related-n-popular-card-price">
          <RupeeIcon />
          {product.price}
        </h4>
        <p className="related-n-popular-card-description">
          {" "}
          {product.description}
        </p>

        <div className="related-n-popular-rating-review">
          <h5 className="rating">
            <FaStar color="#FFA439" />{" "}
            <span>{` ${product.rating?.rate} `}</span>
          </h5>
          <h5 className="count">{` ${product.rating?.count} Sold`}</h5>
        </div>
      </div>
    </div>
  );
}
