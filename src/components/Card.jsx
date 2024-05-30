import React from "react";
import { useSelector } from "react-redux";
import Products from "./Products";
function Card({ data }) {
<<<<<<< HEAD
  const brand = useSelector((state) => state.filters.brand);
=======
  const {brandName} = useSelector((state) => state.filter);

>>>>>>> dawi
  return (
    <div className="bg-gray-100	container  grid gap-4  md:grid-cols-2 lg:grid-cols-4 ">
      {brand
        ? data.products
<<<<<<< HEAD
            .filter((item) => item.brand === brand)
            .map((item) => <Products key={item.id} item={item} />)
        : data.products.map((item) => <Products key={item.id} item={item} />)}
=======
            .filter((item) => item.brand === brandName)
            .map((item,index) => <Products key={index} item={item} />)
        : data.products.map((item,index) => <Products key={index} item={item} />)}
>>>>>>> dawi
    </div>
  );
}

export default Card;
