import React from "react";
import "./MovieCard.css";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

const MovieCard = ({ el, id }) => {
  return (
    <div>
      <div className="movie_card">
        <div className="info_section">
          <img className="image" src={el.image} alt="" />
          <div className="movie_header">
            <img className="img" src={el.image} alt="" />
            <span className="tile">{el.name}</span>

            <h4>{el.date}</h4>
          </div>
          <div className="movie_desc">
            <p className="text">{el.description}</p>
          </div>

          <div className="rating">
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={el.rating}
              className="starSearch"
            />
          </div>
        </div>
        <Link to={`/description/${id}`}>
          {" "}
          <img src={el.image} alt="" className="center" />
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
