import React from "react";
import { directors } from "../data";

function Directors() {
  const renderDirectors = Object.keys(directors).map((director) => (
    <div key={director}>
      <h2>{`Name: ${directors[director].name}`}</h2>
      <p>Movies:</p>
      <ul>
        {directors[director].movies.map((movieTitle) => (
          <li key={movieTitle}>{movieTitle}</li>
        ))}
      </ul>
    </div>
  ))
  
  return (
    <div>{/*{code here}*/}
      <h1>Directors Page</h1>
      {renderDirectors}  
    </div>
  );
}

export default Directors;
