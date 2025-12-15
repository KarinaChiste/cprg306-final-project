"use client";

import { useEffect, useState } from "react";
import { Character } from "./character";

async function fetchCharacter(character, selectedMedia) 
{
  try{
    const response = await fetch(`https://api.disneyapi.dev/character?name=${encodeURIComponent(character)}`);
     
    if(!response.ok){
      throw new Error(
        `HTTP Error! status ${response.status}`
      );
    }

    const data = await response.json();

    if (data.data){
      return data.data;
    }
    else{
      return [];
    }

  }  

  catch(error){
    console.error("Error: ", error);
    return [];
  }

}



export function Media({character, selectedMedia})
{
  const [characters, setCharacters] = useState([]);
  const [chosenMedia, setChosenMedia] = useState('Movies');

  useEffect(() =>{
    const loadCharacters = async () =>{
      const loadedCharacters = await fetchCharacter(character);
      setCharacters(loadedCharacters);
    };

    if (character) {
      loadCharacters();
    }
    if(selectedMedia == 'films'){
      setChosenMedia("Movies");
    }
    else if (selectedMedia == 'tvShows'){
      setChosenMedia('TV Shows');
    }
    else if (selectedMedia == 'videoGames'){
      setChosenMedia('Video Games');
    }
    else if (selectedMedia == 'parkAttractions'){
      setChosenMedia('Theme Park Attractions');
    }
  }, [character, selectedMedia]);

  return(
      <div>
       
        <ul>
          {Array.isArray(characters) && characters.length ===0 && (
            <li className="text-white text-center">No Characters found</li>
          )}

          {Array.isArray(characters) &&
            characters.map((char) => (
              <li key={char._id}>
                  <Character name={char.name} imageUrl={char.imageUrl} media={char[selectedMedia]} chosenMedia={chosenMedia}/>
              </li>
            ))
          }

        </ul>
      </div>
  );
}