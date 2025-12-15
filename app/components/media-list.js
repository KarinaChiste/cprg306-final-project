"use client";
import { useState } from "react";


export function MediaList({onSelection}){
  const [selection, setSelection] = useState("movie");
  const [disabledMovie, setDisabledMovie] = useState(true);
  const [disabledShow, setDisabledShow] = useState(false);
  const [disabledGame, setDisabledGame] = useState(false);

    function selectMovies(){
      setSelection("movie");
      onSelection("films");
      setDisabledGame(false);
      setDisabledMovie(true);
      setDisabledShow(false);
    }

    function selectShows(){
      setSelection("shows");
      onSelection("tvShows");
      setDisabledGame(false);
      setDisabledMovie(false);
      setDisabledShow(true);
    }

    function selectGames(){
      setSelection("games");
      onSelection("videoGames");
      setDisabledGame(true);
      setDisabledMovie(false);
      setDisabledShow(false);
    }

  return(
    <main>
      <button onClick={selectMovies} className="border-black bg-white m-3 p-3 rounded-2xl  disabled:bg-blue-600 disabled:text-white" disabled={disabledMovie}>Movies</button>
      <button onClick={selectShows}  className="border-black bg-white m-3 p-3 rounded-2xl  disabled:bg-blue-600 disabled:text-white" disabled={disabledShow}>TV Shows</button>
      <button onClick={selectGames}  className="border-black bg-white m-3 p-3 rounded-2xl  disabled:bg-blue-600 disabled:text-white" disabled={disabledGame}>Video Games</button>

    </main>
  )

}