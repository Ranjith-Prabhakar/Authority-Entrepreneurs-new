import React, { useState } from "react";
import "./reviewFilter.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import SeperatorLine from "../../components/ui/SeperatorLine";
export default function ReviewsFilter() {
  const reviewTopics = [
    "Product Quality",
    "Seller Services",
    "Product Price",
    "Shipment",
    "Match with Description",
  ];

  return (
    <div className="filter-box">
      <h3 className="filter-title">Reviews Filter</h3>
      <SeperatorLine />
      <div className="filter-section">
        <div className="filter-header">
          <span>Rating</span>
          <IoIosArrowDown className="arrow-icon-style" />
        </div>

        <div className="filter-options">
          {[5, 4, 3, 2, 1].map((star) => (
            <label key={star} className="checkbox-row">
              <input type="checkbox" />
              <FaStar className="filter-section-star-icon-style" />
              <span className="star-label">{star}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-header">
          <span>Review Topics</span>
          <IoIosArrowDown className="arrow-icon-style" />
        </div>

        <div className="filter-options">
          {reviewTopics.map((topic) => (
            <label key={topic} className="checkbox-row">
              <input type="checkbox" />
              <span className="topic-label">{topic}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
