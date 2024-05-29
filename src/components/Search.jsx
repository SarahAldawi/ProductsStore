import React from "react";
import { setSearchTerm } from "../features/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import _, { debounce } from "lodash";

function Search() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.filters.search);

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="ml-4">
      <label className="input input-bordered flex items-center gap-10">
        <input
          type="text"
          className="grow"
          placeholder="What are you looking for?"
          value={searchTerm}
          onChange={handleChange}
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
