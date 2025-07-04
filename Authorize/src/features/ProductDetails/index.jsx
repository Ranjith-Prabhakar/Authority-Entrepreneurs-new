import ProductImageSection from "./ProductImageSection";
import ProductDescriptionSection from "./ProductDescriptionSection";
import "./productDetails.css";
export default function ProductDetails() {
  return (
    <div className="product-page-wrapper">
      <div className="product-page-image-section">
        <ProductImageSection />
      </div>
      <div className="product-page-description-section">
        <ProductDescriptionSection />
      </div>
    </div>
  );
}
