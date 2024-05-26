import React from "react";
function Categories() {
  return (
    <>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Brands</div>
        <div className="collapse-content">
          <select className="select select-bordered w-full max-w-xs">
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

///////////https://dummyjson.com/products/category/smartphones
