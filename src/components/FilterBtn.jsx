import React from "react";

function FilterBtn({ filteredItem, setSearchField, data }) {
  return (
    <div>
      {data.products.map((item) => (
        <button onClick={() => setSearchField(item.brand)} className="btn">{item.brand}</button>
      ))}
    </div>
  );
}

export default FilterBtn;

{
  /* <button onClick={() => setSearchField("Golden")}>{item.brand} */
}
