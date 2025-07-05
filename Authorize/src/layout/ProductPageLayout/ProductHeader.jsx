import { useGetProduct } from "../../hooks/getProduct";
import productBrandImg from "../../assets/product-brand.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { LiaCartPlusSolid } from "react-icons/lia";
import "./productHeader.css";
import SeperatorLine from "../../components/ui/SeperatorLine";
import AuthModal from "../../features/Auth/AuthModal";
import { useState } from "react";
import { useGetUser } from "../../hooks/getUser";
import useLogoutUser from "../../hooks/logoutUser";
import { useNavigate } from "react-router-dom";

export default function () {
  const user = useGetUser();
  const logoutHandler = useLogoutUser();
  const product = useGetProduct();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="selected-product-wrapper">
      <div className="selected-product-wrapper-top">
        <div
          className="selected-product-logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={product.brand ? product.brand : productBrandImg} alt="" />
        </div>
        <div className="selected-product-navigation-flex">
          <IoIosSearch className="selected-product-icons" />
          <div className="selected-product-item-wraper">
            <h5>Categories</h5>
            <IoIosArrowDown className="selected-product-icons" />
          </div>
          <div className="selected-product-item-wraper">
            <IoPersonOutline className="selected-product-icons" />
            {user.username ? (
              <h5 onClick={() => logoutHandler()}>Logout</h5>
            ) : (
              <h5 onClick={() => setShowModal(true)}>Sign in</h5>
            )}
          </div>
          <CiHeart className="selected-product-icons" />
          <LiaCartPlusSolid className="selected-product-icons" />
        </div>
      </div>
      <div className="selected-product-wrapper-bottom">
        <SeperatorLine />
      </div>

      {showModal && <AuthModal setShowModal={setShowModal} />}
    </div>
  );
}
