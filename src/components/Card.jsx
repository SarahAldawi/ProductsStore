import React from "react";
import { useSelector } from "react-redux";
import Products from "./Products";
function Card({ data }) {
  const brandName = useSelector((state) => state.brand.brandName);

  return (
    <div className="bg-gray-100	container  grid gap-4  md:grid-cols-2 lg:grid-cols-4 ">
      {brandName
        ? data.products
            .filter((item) => item.brand === brandName)
            .map((item) => <Products key={item.id} item={item} />)
        : data.products.map((item) => <Products key={item.id} item={item} />)}
    </div>
  );
}

export default Card;
