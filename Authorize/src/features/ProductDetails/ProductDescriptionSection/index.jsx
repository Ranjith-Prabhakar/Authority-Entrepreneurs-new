import { FaStar } from "react-icons/fa";
import { useGetProduct } from "../../../hooks/getProduct";
import { FaIndianRupeeSign } from "react-icons/fa6";
import strightLine from "../../../assets/doted-stright-line.png";
import "./productDescriptionSection.css";
import useColorPicker from "./hooks/colorPicker";
import useSizePicker from "./hooks/sizePicker";
import { Link } from "react-router-dom";

export default function ProductDescriptionSection() {
  const product = useGetProduct();
  let [color, colorPickHandler, colorList] = useColorPicker();
  let [size, sizePickHandler, sizeList] = useSizePicker();
  return (
    <div>
      {product ? (
        <div className="product-description-wrapper">
          <div className="brand-name">
            <p>{product.brand ? product.brand : "John Lewis ANYDAY"}</p>
          </div>
          <div className="product-title">
            <h3>{product.title}</h3>
          </div>
          <div className="product-description-price-section">
            <div className="left">
              <h5 className="actual">
                <FaIndianRupeeSign />
                {Math.floor((product.price / 100) * 135)}.00
              </h5>
              <h5 className="discount">
                <FaIndianRupeeSign />
                {Math.floor(product.price)}.00
              </h5>
            </div>
            <div className="right">
              <h5 className="no-of-sale">
                {`${
                  product.rating?.count?.toString()[0]
                },${product.rating?.count?.toString().slice(1)} Sold`}
              </h5>
              <h5 className="rating">
                <FaStar className="rating-star" />
                {product.rating?.rate}
              </h5>
            </div>
          </div>
          <div className="stright-line">
            <img src={strightLine} alt="" />
          </div>
          <div className="description">
            <h4>Description:</h4>
            <p>{product.description}</p>
          </div>
          <div className="color">
            <h5>
              Color: <span>{color}</span>
            </h5>
            <div className="colorList">
              {colorList.map((colorEl, index) => (
                <div
                  key={colorEl[0]}
                  className="color-list-elements-wrapper"
                  style={{
                    border: `1px solid ${colorEl[0]}`,
                  }}
                >
                  <div
                    className="color-list-elements-wrapper-child"
                    style={{
                      backgroundColor: colorEl[0],
                    }}
                    id={colorEl[0]}
                    onClick={() => colorPickHandler(index, colorEl[0])}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className="size">
            <div className="size-top">
              <h5 className="size-selected-size">
                Size: <span>{size}</span>
              </h5>
              <Link className="link-style">View Size Chart</Link>
            </div>
            <div className="size-bottom">
              {sizeList.map((sizeEl, index) => (
                <div
                  className="size-bottom-sizes"
                  onClick={() => sizePickHandler(index)}
                  style={{
                    backgroundColor:
                      sizeEl === size ? "#EBEBEB" : "transparent",
                  }}
                >
                  {sizeEl}
                </div>
              ))}
            </div>
          </div>
          <div className="buttons">
            <div className="add-to-cart">Add To Cart</div>
            <div className="checkout-now">Checkout Now</div>
          </div>
          <Link className="link-style terms-n-condition">Delivery T&C</Link>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
