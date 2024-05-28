import React from "react";
import Categories from "./Categories";
import Brands from "./Brands";
function SidebarItems() {
  return (
    <div>
      <Categories />
      <Brands />
      {/* <label htmlFor="points" className="text-xl font-medium">
        price ($0 to $1000):
      </label>
      <input type="range" id="points" name="points" min="0" max="10"></input> */}
    </div>
  );
}

export default SidebarItems;
