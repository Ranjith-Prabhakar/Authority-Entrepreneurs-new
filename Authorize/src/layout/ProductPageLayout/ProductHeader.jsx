import { useGetProduct } from "../../hooks/getProduct";
import productBrandImg from "../../assets/product-brand.png";
import strightLine from "../../assets/doted-stright-line.png";
import cart from "../../assets/cart.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import "./productHeader.css";
export default function () {
  const product = useGetProduct();

  return (
    <div className="selected-product-wrapper">
      <div className="selected-product-wrapper-top">
        <div className="selected-product-logo">
          <img
            src={product.brand ? product.brand : productBrandImg}
            alt=""
            srcset=""
          />
        </div>
        <div className="selected-product-navigation-flex">
          <IoIosSearch />
          <div className="selected-product-categories">
            <h5>Categories</h5>
            <IoIosArrowDown />
          </div>
          <div className="selected-product-auth">
            <IoPersonOutline />
            <h5>Sign in</h5>
          </div>
          <CiHeart />
          <img src={cart} alt="" srcset="" />
        </div>
      </div>
      <div className="selected-product-wrapper-bottom">
        <img src={strightLine} alt="" srcset="" />
      </div>
    </div>
  );
}
