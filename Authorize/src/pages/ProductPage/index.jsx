import useProductSetter from "../../hooks/setProduct";
import ProductDetails from "../../features/ProductDetails";
import { useParams } from "react-router-dom";
import SeperatorLine from "../../components/ui/SeperatorLine";
import RelatedProducts from "../../features/RelatedProducts";
import ProductReview from "../../features/ProductReview";
import PopularThisWeek from "../../features/PopularThisWeek";
import useScrollToTop from "../../hooks/scrollToTop";
export default function ProductPage() {
  useScrollToTop();
  const { id } = useParams();
  useProductSetter(id);
  return (
    <div>
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
