import { useState, useEffect, useRef } from "react";
import "./PriceFilter.css";
import { useSetFilter } from "../../../../hooks/setFilter";

export default function PriceFilter() {
  const setFilter = useSetFilter();
  const MIN_PRICE = 10;
  const MAX_PRICE = 5000;
  const MIN_GAP = 5;

  const [min, setMin] = useState(MIN_PRICE);
  const [max, setMax] = useState(MAX_PRICE);
  const rangeRef = useRef(null);

  // Update slider background when min/max changes
  useEffect(() => {
    const percentMin = ((min - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
    const percentMax = ((max - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

    if (rangeRef.current) {
      rangeRef.current.style.background = `linear-gradient(
        to right,
        #ccc ${percentMin}%,
        #2196f3 ${percentMin}%,
        #2196f3 ${percentMax}%,
        #ccc ${percentMax}%
      )`;
    }
  }, [min, max]);

  // Dispatch price range to the store
  useEffect(() => {
    setFilter({ prop: "price", data: [min, max] });
  }, [min, max]);

  return (
    <div className="price-filter-container">
      <div className="histogram-wrapper">
        <div className="histogram">
          {[45, 50, 60, 70, 90, 100, 80, 60, 50, 40].map((h, i) => (
            <div
              key={i}
              className="histogram-bar"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>

        <div className="range-slider">
          <div className="slider-track" ref={rangeRef}></div>

          {/* Min range */}
          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={min}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (val <= max - MIN_GAP) setMin(val);
            }}
          />

          {/* Max range */}
          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={max}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (val >= min + MIN_GAP) setMax(val);
            }}
          />
        </div>
      </div>

      <div className="price-values">
        <input readOnly value={`${min.toLocaleString()} INR`} />
        <input readOnly value={`${max.toLocaleString()} INR`} />
      </div>
    </div>
  );
}
