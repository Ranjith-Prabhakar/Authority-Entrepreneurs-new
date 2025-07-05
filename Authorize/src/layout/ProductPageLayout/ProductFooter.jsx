import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";
import "./productFooter.css";
import SeperatorLine from "../../components/ui/SeperatorLine";
import brandLog from "../../assets/product-brand.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img className="logo" src={brandLog} alt="" />
          <div className="newsletter">
            <input type="email" placeholder="Get latest offers to your inbox" />
            <button>&gt;</button>
          </div>
          <div className="social-icons">
            <div>
              <FiFacebook className="social-icons-element " />
            </div>
            <div>
              <FaInstagram className="social-icons-element " />
            </div>
            <div>
              <LuTwitter className="social-icons-element " />
            </div>
            <div>
              <MdOutlineEmail className="social-icons-element " />
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-column">
            <h4>Shop</h4>
            <ul>
              <li>My account</li>
              <li>Login</li>
              <li>Wishlist</li>
              <li>Cart</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Information</h4>
            <ul>
              <li>Shipping Policy</li>
              <li>Returns & Refunds</li>
              <li>Cookies Policy</li>
              <li>Frequently asked</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <SeperatorLine />
      <div className="footer-bottom">
        <span>© John Lewis plc 2001 - 2024</span>
        <div className="footer-selects">
          <div className="select">
            <img src="https://flagcdn.com/w40/us.png" alt="US" />
            English <IoChevronDown />
          </div>
          <div className="select">
            USD <IoChevronDown />
          </div>
        </div>
      </div>
    </footer>
  );
}
