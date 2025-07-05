import { useNavigate } from "react-router-dom";
import "./searchList.css";
export default function SearchList({ title, id }) {
  let navigate = useNavigate();
  return (
    <div
      className="search-list-item"
      onClick={() => navigate(`/product/${id}`)}
    >
      <p>{title}</p>
    </div>
  );
}
