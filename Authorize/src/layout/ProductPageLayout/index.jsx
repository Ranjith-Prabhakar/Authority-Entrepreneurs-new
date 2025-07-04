import { Outlet } from "react-router-dom";
import DiscountBar from "../../features/DiscountBar";
import ProductHeader from "./ProductHeader";
import ProductFooter from "./ProductFooter";
import "./productPageLayout.css";
export default function () {
  return (
    <div>
      <DiscountBar />
      <div className="product-page-layout">
        <ProductHeader />
        <Outlet />
        <ProductFooter />
      </div>
    </div>
  );
}
