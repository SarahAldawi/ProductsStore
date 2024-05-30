import React from "react";
import { useSelector } from "react-redux";
import Products from "./Products";
function Card({ data }) {
  const {brandName} = useSelector((state) => state.filter);

  return (
    <div className="bg-gray-100	container  grid gap-4  md:grid-cols-2 lg:grid-cols-4 ">
      {brandName
        ? data.products
            .filter((item) => item.brand === brandName)
            .map((item,index) => <Products key={index} item={item} />)
        : data.products.map((item,index) => <Products key={index} item={item} />)}
    </div>
  );
}

export default Card;
