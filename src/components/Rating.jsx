import React from "react";

function Rating() {
  return (
    <div className="rating py-1">
      <input name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input
        name="rating-2"
        className="mask mask-star-2 bg-orange-400"
        checked
      />
      <input name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input name="rating-2" className="mask mask-star-2 bg-orange-400" />
      <input name="rating-2" className="mask mask-star-2 bg-orange-400" />
    </div>
  );
}

export default Rating;
