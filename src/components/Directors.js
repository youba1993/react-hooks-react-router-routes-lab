import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map((dir, index)=>
    <div key={index}>
        {dir.name}
        <ul>
          {dir.movies.map((movie, index)=>
          <li key={index}>
            {movie}
          </li>)}
        </ul>
    </div>
    )}
  </div>;
}

export default Directors;
