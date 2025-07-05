import ReviewStarsSection from "./ReviewStarsSection";
import ReviewFilterAndListSection from "./ReviewFilterAndListSection";
import PaginationSection from "./PaginationSection";
import "./productReview.css";
export default function () {
  return (
    <div className="product-review-wrapper">
      <h3>Product Reviews</h3>
      <ReviewStarsSection />
      <ReviewFilterAndListSection />
      <PaginationSection />
    </div>
  );
}
