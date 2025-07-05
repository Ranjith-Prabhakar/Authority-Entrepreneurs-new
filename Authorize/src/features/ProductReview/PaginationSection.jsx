import { IoChevronForwardSharp } from "react-icons/io5";
import "./paginationSection.css";
export default function () {
  return (
    <div className="review-n-rating-pagination">
      <div className="review-n-rating-pagination-wrapper">
        <div className="review-n-rating-pagination-tabs selected-tab">1</div>
        <div className="review-n-rating-pagination-tabs">2</div>
        <div className="review-n-rating-pagination-tabs">...</div>
        <div className="review-n-rating-pagination-tabs">19</div>
        <div className="review-n-rating-pagination-tabs pagination-forward-icon-wrapper">
          <IoChevronForwardSharp className="pagination-forward-icon" />
        </div>
      </div>
    </div>
  );
}
