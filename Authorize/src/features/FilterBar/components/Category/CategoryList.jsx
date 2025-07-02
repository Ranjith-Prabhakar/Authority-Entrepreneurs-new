import { TiTick } from "react-icons/ti";
import "./categoryList.css";

export default function ({ category, status, onClick }) {
  return (
    <div className="category-list" onClick={onClick}>
      <div className="category-title-n-stock">
        <h4>{category[0][0].toUpperCase() + category[0].slice(1)}</h4>
        <p>{category[1]}</p>
      </div>
      {status ? <TiTick className="tiTick-icon" /> : null}
    </div>
  );
}
