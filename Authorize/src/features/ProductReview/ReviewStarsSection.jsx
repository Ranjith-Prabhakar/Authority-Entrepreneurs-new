import "./reviewStarsSection.css";
import { FaStar } from "react-icons/fa";
export default function ReviewStarsSection({
  rating = 4.5,
  totalReviews = "1,25k",
  breakdown = [
    { stars: 5, count: 100 },
    { stars: 4, count: 38 },
    { stars: 3, count: 4 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ],
}) {
  const totalCount = breakdown.reduce((acc, item) => acc + item.count, 0);

  return (
    <div className="review-stars-section-review-summary">
      <div className="review-stars-section-summary-left">
        <div className="review-stars-section-summary-left-circle">
          <svg viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              className="review-stars-section-summary-left-circle-track"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              className="review-stars-section-summary-left-circle-progress"
              strokeDasharray="283"
              strokeDashoffset={(1 - rating / 5) * 283}
            />
          </svg>
          <div className="review-stars-section-summary-left-circle-rating-text">
            {rating.toFixed(1)}
          </div>
        </div>
        <div>
          <div>
            {Array(5)
              .fill(0)
              .map(() => (
                <FaStar className="review-stars-section-star-style" />
              ))}
          </div>
          <p className="review-stars-section-review-count">
            from {totalReviews} reviews
          </p>
        </div>
      </div>

      <div className="review-stars-section-summary-right">
        {breakdown.map((item) => (
          <div
            key={item.stars}
            className="review-stars-section-summary-right-bar-row"
          >
            <span className="review-stars-section-summary-right-star-label">
              {item.stars}.0
            </span>
            <FaStar className="review-stars-section-star-style" />
            <div className="review-stars-section-summary-right-bar-bg">
              <div
                className="review-stars-section-summary-right-bar-fill"
                style={{ width: `${(item.count / totalCount) * 100}%` }}
              ></div>
            </div>
            <span className="review-stars-section-summary-right-count">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
