import React from "react";
import Categories from "./Categories";
import Filter from "./Filter";
import Brands from './Brands'
function SidebarItems() {
  return (
    <div>
      <Categories />
      <Brands />
      {/* <Filter/> */}
      {/* <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Brands </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Price </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div> */}
    </div>
  );
}

export default SidebarItems;
