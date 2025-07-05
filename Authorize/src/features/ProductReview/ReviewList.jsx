import "./reviewList.css";
import { FaStar } from "react-icons/fa";
import { HiOutlineThumbUp } from "react-icons/hi";
import { HiOutlineThumbDown } from "react-icons/hi";
const reviews = [
  {
    id: 1,
    stars: 5,
    content: "This is amazing product I have.",
    date: "July 2, 2020 03:29 PM",
    user: "Darrell Steward",
    avatar: "https://i.pravatar.cc/30?img=1",
    likes: 128,
  },
  {
    id: 2,
    stars: 5,
    content: "This is amazing product I have.",
    date: "July 2, 2020 1:04 PM",
    user: "Darlene Robertson",
    avatar: "https://i.pravatar.cc/30?img=2",
    likes: 82,
  },
  {
    id: 3,
    stars: 5,
    content: "This is amazing product I have.",
    date: "June 26, 2020 10:03 PM",
    user: "Kathryn Murphy",
    avatar: "https://i.pravatar.cc/30?img=3",
    likes: 9,
  },
  {
    id: 4,
    stars: 5,
    content: "This is amazing product I have.",
    date: "July 7, 2020 10:14 AM",
    user: "Ronald Richards",
    avatar: "https://i.pravatar.cc/30?img=4",
    likes: 124,
  },
];

export default function ReviewList() {
  return (
    <div className="review-list-section">
      <h3 className="review-title">Review Lists</h3>

      <div className="filter-buttons">
        <button className="filter-btn active">All Reviews</button>
        <button className="filter-btn">With Photo & Video</button>
        <button className="filter-btn">With Description</button>
      </div>

      {reviews.map((review, index) => (
        <div
          className="review-item"
          key={review.id}
          style={{ borderTop: index === 0 ? "none" : "2px dashed #b8b8b8" }}
        >
          <div className="stars">
            {Array(review.stars)
              .fill(<FaStar />)
              .map((star, index) => (
                <span key={index} className="star">
                  {star}
                </span>
              ))}
          </div>
          <p className="review-content">{review.content}</p>
          <p className="review-date">{review.date}</p>

          <div className="review-footer">
            <div className="user-info">
              <img src={review.avatar} alt={review.user} className="avatar" />
              <span className="user-name">{review.user}</span>
            </div>
            <div className="like-buttons">
              <button className="like-btn">
                <HiOutlineThumbUp /> <span>{review.likes}</span>
              </button>
              <button className="like-btn dis-like-btn">
                <HiOutlineThumbDown />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
