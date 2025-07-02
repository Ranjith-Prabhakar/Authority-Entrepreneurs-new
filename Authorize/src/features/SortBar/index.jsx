import "./sortBar.css";
import { MdTune } from "react-icons/md";
import { TfiViewList } from "react-icons/tfi";
import { useSetSort } from "../../hooks/setSort";
import { useState } from "react";
export default function SortBar() {
  let [sortListOn, setSortListOn] = useState(false);
  let [sortHandler, sort] = useSetSort();
  return (
    <div className="sorted-bar-wrapper">
      <div className="sorted-bar-wrapper-top-section">
        {" "}
        <div
          className="sorted-bar-wrapper-left-section"
          onClick={() => {
            setSortListOn(!sortListOn);
          }}
        >
          <TfiViewList />
          <MdTune />
          {sortListOn && (
            <ul className="sort-list">
              <li
                onClick={() => {
                  sortHandler(1);
                  setSortListOn(false);
                }}
              >
                Price-High-Low
              </li>
              <li
                onClick={() => {
                  sortHandler(-1);
                  setSortListOn(false);
                }}
              >
                Price-Low-High
              </li>
            </ul>
          )}
        </div>
        <div className="sorted-bar-wrapper-right-section">
          <h5>
            <span>Sorted by :</span> {sort}
          </h5>
        </div>
      </div>
      <div className="sorted-bar-wrapper-bottom-section"></div>
    </div>
  );
}
