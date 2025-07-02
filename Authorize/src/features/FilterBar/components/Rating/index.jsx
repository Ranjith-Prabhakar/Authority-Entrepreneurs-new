import { useState } from "react";
import Accordion from "../../../../components/ui/Accordion";
import Rating from "../../../../components/ui/Rating";
import "./ratingFilter.css";
export default function () {
  let [on, setOn] = useState(true);
  return (
    <div className="rating-wraper">
      <Accordion head="Rating" on={on} setOn={setOn}>
        <div className="rating-filter-container">
          <div className="rating-stars">
            <Rating rating={4} />
          </div>
          <div className="rating-stars">
            <Rating rating={5} />
          </div>
          <div className="rating-stars">
            <Rating rating={3} />
          </div>
          <div className="rating-stars">
            <Rating rating={2} />
          </div>
          <div className="rating-stars">
            <Rating rating={1} />
          </div>
        </div>
      </Accordion>
    </div>
  );
}
