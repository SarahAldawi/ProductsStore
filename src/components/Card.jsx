import React from "react";
import Rating from "./Rating";

function Card({ data }) {
  return (
    <div className="bg-gray-100	container  grid gap-4  md:grid-cols-2 lg:grid-cols-4 ">
      {data.products.map((item) => (
        <div key={item.id}>
          <div className="card shadow-xl hover:shadow-2xl transition duration-300 bg-white">
            <figure>
              <img src={item.thumbnail} alt={item.title} />
            </figure>
            <div className="card-body">
            <Rating />
              <h2>{item.category}</h2>
              <h2 className="card-title">{item.title}</h2>
              <p className="line-clamp-2">{item.description}</p>
              <h2 className="font-bold">${item.price}</h2>
              <p>{item.availabilityStatus}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-warning">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
