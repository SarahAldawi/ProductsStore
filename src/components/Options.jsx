import React from "react";

function Options() {
   const filterList= ["beauty", "furniture", "tablets"]
  return (
    <select className="select select-bordered w-full max-w-xs">
      {filterList.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default Options;
