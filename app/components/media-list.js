"use client";
import { useState } from "react";


export function MediaList({onSelection}){
  const [selection, setSelection] = useState("movie");

    function selectMovies(){
      setSelection("movie");
      onSelection("films");
    }

    function selectShows(){
      setSelection("shows");
      onSelection("tvShows");
    }

    function selectGames(){
      setSelection("games");
      onSelection("videoGames");
    }

  return(
    <main>
      <button onClick={selectMovies}>Movies</button>
      <button onClick={selectShows}>TV Shows</button>
      <button onClick={selectGames}>Video Games</button>

    </main>
  )

}