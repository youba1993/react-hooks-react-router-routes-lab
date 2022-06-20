import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map((item, index)=>
    <div key={index}>
      {item.title}
      {item.time}
      <ul>{item.genres.map((list, index)=>
      <li key={index}>{list}</li>
      )}</ul>
    </div>
    )}
  </div>;
}

export default Movies;
