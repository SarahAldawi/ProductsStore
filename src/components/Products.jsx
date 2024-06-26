import React from "react";
import Rating from "./Rating";

function Products({ item }) {
  return (
    <div>
      <div className="card shadow-xl hover:shadow-2xl transition duration-300 bg-white">
        <figure>
          <img src={item.thumbnail} alt={item.title} />
        </figure>
        <div className="card-body">
          <Rating />
          <h2 className="font-medium">{item.brand}</h2>

          <h2 className="card-title">{item.title}</h2>
          <h2>{item.category}</h2>
          <p className="line-clamp-2">{item.description}</p>
          <h2 className="font-bold">${item.price}</h2>
          <p>{item.availabilityStatus}</p>
          <div className="card-actions justify-end">
            {item.availabilityStatus == "Out of Stock" ? (
              <button className="btn" disabled>
                Buy now
              </button>
            ) : (
              <button className="btn btn-warning">Buy Now</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
