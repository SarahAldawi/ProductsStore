import React from "react";

function Card({ data,filteredItem }) {
  return (
    <div className="">
      {filteredItem.map((item) => (
        <div className="card w-96 bg-base-100 shadow-xl " key={item.id}>
          <figure>
            <img src={item.thumbnail} alt={item.title} />
          </figure>
          <div></div>
          <div className="card-body">
            <h2>{item.category}</h2>
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            <h2>${item.price}.00</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
