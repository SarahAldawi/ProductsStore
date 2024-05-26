import React from "react";
import Search from "./Search";

function Navbar() {
  return (
    <div className="navbar bg-warning mb-8 p-4">
      <a className="btn btn-ghost text-xl">The Store</a>
      <Search/>
    </div>
  );
}

export default Navbar;
