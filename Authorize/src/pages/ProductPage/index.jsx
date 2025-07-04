import NavigationTracker from "../../components/ui/NavigationTracker";
import useProductSetter from "../../hooks/setProduct";
import ProductDetails from "../../features/ProductDetails";
import { useParams } from "react-router-dom";

export default function () {
  const { id } = useParams();
  console.log("inside useProductSetter ", id);
  useProductSetter(id);
  return (
    <div className="profile-page-wrapper">
      <NavigationTracker />
      <ProductDetails />
      {/* <RelatedProducts /> */}
      {/* <ProductReview /> */}
      {/* <PopularThisWeek /> */}
    </div>
  );
}
