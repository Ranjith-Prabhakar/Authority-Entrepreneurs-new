import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./pagination.css";
import { useState } from "react";
export default function Pagination({
  paginationHandler,
  buttonCount,
  currentTab,
}) {
  let inputArray = new Array(buttonCount).fill(0);
  return (
    <div className="pagination">
      <div
        className="pagination-icons"
        onClick={() => {
          paginationHandler(currentTab - 1);
        }}
      >
        <IoIosArrowBack />
      </div>
      <div className="pagination-nums-tab-wrapper">
        {inputArray.map((_, index) => (
          <div
            onClick={() => paginationHandler(index + 1)}
            key={index}
            className={`${
              currentTab === index + 1 ? "active" : ""
            } pagination-nums-tab `}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div
        className="pagination-icons"
        onClick={() => {
          paginationHandler(currentTab + 1);
        }}
      >
        <IoIosArrowForward />
      </div>
    </div>
  );
}
