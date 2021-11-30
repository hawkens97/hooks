import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import AddMovie from "../AddMovie/AddMovie";

const MovieList = ({ movies, AddNewMovie }) => {
  return (
    <div className="map">
      {movies.map((el, i) => (
        <MovieCard el={el} key={i} />
      ))}
      <AddMovie AddNewMovie={AddNewMovie} />
    </div>
  );
};
export default MovieList;
