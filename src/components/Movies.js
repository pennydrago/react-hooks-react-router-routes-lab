import React from "react";
import { movies } from "../data";

function Movies() {
  const renderMovies = Object.keys(movies).map((movie) => (
    <div key={movie}>
      <h2>{`Name: ${movies[movie].title}`}</h2>
      <p>{`Time: ${movies[movie].time}`}</p>
      <p>Genres:</p>
      <ul>
        {movies[movie].genres.map((genre) => (
        <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ))
  
  return (
    <div>{/*{code here}*/}
      <h1>Movies Page</h1>
      {renderMovies}
    </div>
  );
}

export default Movies;
