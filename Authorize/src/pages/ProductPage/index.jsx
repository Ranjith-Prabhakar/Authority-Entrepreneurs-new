import NavigationTracker from "../../components/ui/NavigationTracker";
import useProductSetter from "../../hooks/setProduct";
import { useParams } from "react-router-dom";

export default function () {
  const { id } = useParams();
  useProductSetter(id);
  return (
    <div className="profile-page-wrapper">
      {/* <NavigationTracker /> */}
      {/* <ProductDetails /> */}
      {/* <RelatedProducts /> */}
      {/* <ProductReview /> */}
      {/* <PopularThisWeek /> */}
    </div>
  );
}
