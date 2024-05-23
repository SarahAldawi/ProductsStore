import React from "react";

function Card({ data, filteredItem }) {
  return (
    <div>
      {filteredItem.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-2 grid-rows-3"
        >
          <div className="card shadow-xl hover:shadow-2xl transition duration-300">
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
        </div>
      ))}
    </div>
  );
}

export default Card;
