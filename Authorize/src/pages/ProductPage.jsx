import NavigationTracker from "../components/ui/NavigationTracker";
import DiscountBar from "../features/DiscountBar";
import ProductHeader from "../layout/ProductHeader";
import { useLocation } from "react-router-dom";

export default function () {
  let { id } = useLocation();
  return (
    <div className="profile-page-wrapper">
      <DiscountBar />
      <ProductHeader />
      <NavigationTracker />
      <ProductDetails />
      <RelatedProducts />
      <ProductReview />
      <PopularThisWeek />
      <ProductFooter />
    </div>
  );
}
