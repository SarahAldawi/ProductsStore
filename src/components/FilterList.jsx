import React from "react";
import Options from "./Options";

function FilterList() {
  const filters = ["Category", "Brand", "Price"];
  return (
    <>
      {filters.map((item) => (
        <div className="collapse collapse-arrow bg-base-200" key={item}>
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">{item} </div>
          <div className="collapse-content">
            <Options />
          </div>
        </div>
      ))}
    </>
  );
}

export default FilterList;
