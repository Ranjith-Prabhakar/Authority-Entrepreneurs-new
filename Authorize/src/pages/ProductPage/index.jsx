import NavigationTracker from "../../components/ui/NavigationTracker";
import useProductSetter from "../../hooks/setProduct";
import ProductDetails from "../../features/ProductDetails";
import { useParams } from "react-router-dom";
import SeperatorLine from "../../components/ui/SeperatorLine";
import RelatedProducts from "../../features/RelatedProducts";
import ProductReview from "../../features/ProductReview";
import PopularThisWeek from "../../features/PopularThisWeek";
export default function () {
  const { id } = useParams();
  console.log("inside useProductSetter ", id);
  useProductSetter(id);
  return (
    <div className="profile-page-wrapper">
      <NavigationTracker />
      <ProductDetails />
      <SeperatorLine />
      <RelatedProducts />
      <SeperatorLine />
      <ProductReview />
      <SeperatorLine />
      <PopularThisWeek />
    </div>
  );
}
