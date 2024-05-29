import React from "react";
import Card from "./Card";
import SidebarItems from "./SidebarItems";

function sidebar({ data }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Card data={data} />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <SidebarItems />
          <button className="btn btn-warning" onClick={() => location.reload()}>
            Clear Filter
          </button>
        </ul>
      </div>
    </div>
  );
}

export default sidebar;
