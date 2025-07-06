import { useNavigate } from "react-router-dom";
import "./searchList.css";
export default function SearchList({ image, title, id }) {
  let navigate = useNavigate();
  return (
    <div
      className="search-list-item"
      onClick={() => navigate(`/product/${id}`)}
    >
      <img src={image} />
      <p>{title}</p>
    </div>
  );
}
