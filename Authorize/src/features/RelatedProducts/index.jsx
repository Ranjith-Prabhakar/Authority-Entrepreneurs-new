import { Link } from "react-router-dom";
import CardRelatedNPopular from "../../components/ui/CardRelatedNPopular";
import "./relatedProducts.css";
import { useSelector } from "react-redux";
export default function RelatedProducts() {
  const products = useSelector((state) => state.products.currentPageProducts);
  return (
    <div className="related-products-wrapper">
      <div className="related-products-header">
        <h3>Related Product</h3>
        <Link className="Link">View All</Link>
      </div>
      <div className="related-products-card">
        {products.map((product) => (
          <CardRelatedNPopular key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
}
