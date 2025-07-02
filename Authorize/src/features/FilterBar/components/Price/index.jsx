import "./price.css";
import PriceFilter from "./PriceFilter";
import Accordion from "../../../../components/ui/Accordion";
import { useState } from "react";
export default function Price() {
  let [on, setOn] = useState(true);
  return (
    <div className="filter-category-wrapper">
      <Accordion head="Price" on={on} setOn={setOn}>
        <PriceFilter />
      </Accordion>
      {/* search bar */}
    </div>
  );
}
