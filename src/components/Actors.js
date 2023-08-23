import React from "react";
import { actors } from "../data";

function Actors() {
  const renderActors = Object.keys(actors).map((actor) => (
    <div key={actor}>
      <h2>{`Name: ${actors[actor].name}`}</h2>
      <p>Movies:</p>
      <ul >
        {actors[actor].movies.map((movieTitle) => (
          <li key={movieTitle}>{movieTitle}</li>
        ))}
      </ul>
    </div>
  ))
  
  return (
    <div>{/*{code here}*/}
      <h1>Actors Page</h1>
      {renderActors}    
    </div>
  );
}

export default Actors;
