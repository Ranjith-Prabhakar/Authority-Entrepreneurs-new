import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function ({ rating = 0 }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div style={{ background: "transparent" }}>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar
          key={`full-${i}`}
          color="#FDB022"
          style={{ background: "transparent" }}
        />
      ))}
      {hasHalfStar && (
        <FaStarHalfAlt
          key="half"
          color="#FDB022"
          style={{ background: "transparent" }}
        />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar
          key={`empty-${i}`}
          color="#FDB022"
          style={{ background: "transparent" }}
        />
      ))}
    </div>
  );
}
