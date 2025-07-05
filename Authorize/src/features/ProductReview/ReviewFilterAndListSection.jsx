import ReviewsFilter from "./ReviewFilter";
import ReviewList from "./ReviewList";
import "./reviewFilterAndListSection.css";
export default function () {
  return (
    <div className="review-filter-n-list-wrapper">
      <ReviewsFilter />
      <ReviewList />
    </div>
  );
}
