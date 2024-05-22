import React, { useState } from "react";

function Search({ data }) {
  const [value, setValue] = useState("");
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value);
  //   setValue(value);
  // };
  return (
    <div className="w-96 mt-10">
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        ></svg>
      </label>
    </div>
  );
}

export default Search;
