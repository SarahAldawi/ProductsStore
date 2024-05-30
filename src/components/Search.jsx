import React, { useEffect, useMemo } from "react";
import { setSearchTerm } from "../features/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { debounce } from "lodash";
function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const debouncedSearch = useMemo(
    () => debounce((searchTerm) => dispatch(setSearchTerm(searchTerm)), 500),
    [dispatch]
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    debouncedSearch(value);
  };

  return (
    <div className="ml-4">
      <label className="input input-bordered flex items-center gap-10">
        <input
          type="text"
          className="grow"
          placeholder="What are you looking for?"
          value={search}
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
