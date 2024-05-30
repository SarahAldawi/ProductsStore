import React from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import {
  beauty,
  smartphones,
  laptops,
  groceries,
} from "../features/filtersSlice";
function Categories() {
  const category = useSelector((state) => state.filters.category);
=======
import { updateCategory } from "../features/filterSlice";

const categoriesList = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches",
];
function Categories() {
  const { category } = useSelector((state) => state.filter);
>>>>>>> dawi
  const dispatch = useDispatch();
  const handleCategory = (e) => {
    const selectedOption = e.target.value;
    dispatch(updateCategory(selectedOption));
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
            value={category}
          >
            {categoriesList.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Categories;
