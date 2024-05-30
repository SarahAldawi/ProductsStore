import React from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import {
  essence,
  chanel,
  dior,
  velvetTouch,
  apple,
  samsung,
} from "../features/filtersSlice";
function Categories() {
  const brand = useSelector((state) => state.filters);
=======
import { updateBrand } from "../features/filterSlice";

const brandsList = [
  "Essence",
  "Chanel",
  "Dior",
  "Velvet Touch",
  "Apple",
  "Samsung",
  "Vivo",
  "Realme",
  "Lenovo",
  "Huawei",
  "Annibale Colombo",
];

function Categories() {
  const { brandName } = useSelector((state) => state.filter);
>>>>>>> dawi
  const dispatch = useDispatch();

  const handleBrand = (e) => {
    const selectedOption = e.target.value;
    dispatch(updateBrand(selectedOption));
  };

  return (
    <>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Brands</div>
        <div className="collapse-content">
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={handleBrand}
            value={brandName}
          >
            {brandsList.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Categories;
