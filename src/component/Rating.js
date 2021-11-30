import React from "react";
import { useState } from "react";

import StarRatingComponent from "react-star-rating-component";

const Rating = ({ getRatingInput }) => {
  // const [rating, setRating] = useState(3);
  const [rate, setRate] = useState();
  const onStarClick = (e) => {
    setRate(e);
    getRatingInput(e);
  };

  return (
    <div className="rate">
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={rate}
        className="starSearch"
        onStarClick={onStarClick}
      />
    </div>
  );
};

export default Rating;
