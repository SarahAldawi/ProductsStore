import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  essence,
  chanel,
  dior,
  velvetTouch,
  apple,
  samsung,
  updateBrand,
} from "../features/brandSlice";

const brands = [
  "Essence",
  "Chanel",
  "Dior",
  "Velvet Touch",
  "Apple",
  "Samsung",
];

function Categories() {
  const brand = useSelector((state) => state.brand);
  const dispatch = useDispatch();

  const handleBrand = (e) => {
    const selectedOption = e.target.value;
    dispatch(updateBrand(selectedOption));
    // switch (selectedOption) {
    //   case "Essence":
    //     dispatch(essence());
    //     break;
    //   case "Chanel":
    //     dispatch(chanel());
    //     break;
    //   case "Dior":
    //     dispatch(dior());
    //     break;
    //   case "Velvet Touch":
    //     dispatch(velvetTouch());
    //     break;
    //   case "Apple":
    //     dispatch(apple());
    //     break;
    //   case "Samsung":
    //     dispatch(samsung());
    //     break;
    //   default:
    //     break;
    // }
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
            value={brand.brand}
          >
            {brands.map((brand, index) => (
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

///////////https://dummyjson.com/products/category/smartphones
