import { useGetProduct } from "../../../hooks/getProduct";
import { IoShareOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./productImageSection.css";
export default function ProductImageSection() {
  const { image: productImage } = useGetProduct();
  return (
    <div className="product-page-image-section-wrapper">
      <div className="product-page-image-section-wrapper-top">
        <div className="product-page-image-section-wrapper-top-img-wrapper">
          <img src={productImage} alt="" />
        </div>
        <div className="product-page-image-section-wrapper-top-icons">
          <div className="product-page-image-section-wrapper-top-icons-top">
            <div className="icon-styles ">
              <IoShareOutline />
            </div>
            <div className="icon-styles">
              <CiHeart />
            </div>
          </div>
          <div className="product-page-image-section-wrapper-top-icons-bottom">
            <div className="icon-styles ">
              <IoIosArrowBack />
            </div>
            <div className="icon-styles ">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
      <div className="product-page-image-section-wrapper-bottom">
        <img src={productImage} alt="" />
        <img src={productImage} alt="" />
        <img src={productImage} alt="" />
        <img src={productImage} alt="" />
        <img src={productImage} alt="" />
      </div>
    </div>
  );
}
