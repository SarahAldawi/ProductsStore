import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  beauty,
  smartphones,
  laptops,
  groceries,
} from "../features/filtersSlice";
function Categories() {
  const category = useSelector((state) => state.filters.category);
  const dispatch = useDispatch();
  const handleCategory = (e) => {
    const selectedOption = e.target.value;
    switch (selectedOption) {
      case "beauty":
        dispatch(beauty());
        break;
      case "smartphones":
        dispatch(smartphones());
        break;
      case "laptops":
        dispatch(laptops());
        break;
      case "groceries":
        dispatch(groceries());
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Category</div>
        <div className="collapse-content">
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={handleCategory}
            value={category.category}
          >
            <option value="beauty">beauty</option>
            <option value="smartphones">smartphones</option>
            <option value="laptops">laptops</option>
            <option value="groceries">groceries</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Categories;
