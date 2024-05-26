import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sortByLowerPrice,
  sortByTitle,
  sortByHigherPrice,
  sortByRating,
} from "../features/SortSlice";

function Sort() {
  const sort = useSelector((state) => state.sort);
  const dispatch = useDispatch();
  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    switch (selectedOption) {
      case "lowPrice":
        dispatch(sortByLowerPrice());
        break;
      case "highPrice":
        dispatch(sortByHigherPrice());
        break;
      case "rating":
        dispatch(sortByRating());
        break;
      case "A-Z":
        dispatch(sortByTitle());
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={handleSortChange}
        value={sort.sort}
      >
        <option disabled value="">
          Sort by:
        </option>
        <option value="lowPrice">Price Low - High</option>
        <option value="highPrice">Price High - Low</option>
        <option value="rating">Customer rating</option>
        <option value="A-Z">A-Z</option>
      </select>
    </div>
  );
}

export default Sort;
