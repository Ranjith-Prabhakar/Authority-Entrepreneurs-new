import { Link } from "react-router-dom";
import CardRelatedNPopular from "../../components/ui/CardRelatedNPopular";
import "./popularProducts.css";
import { useSelector } from "react-redux";
export default function PopularThisWeek() {
  const products = useSelector((state) => state.products.currentPageProducts);
  return (
    <div className="popular-this-week-wrapper">
      <div className="popular-this-week-header">
        <h3>Popular This Week</h3>
        <Link className="popular-this-week-Link">View All</Link>
      </div>
      <div className="popular-this-week-card">
        {products.map((product) => (
          <CardRelatedNPopular key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
}
