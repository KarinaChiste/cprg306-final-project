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

  useEffect(() =>{
    const loadCharacters = async () =>{
      const loadedCharacters = await fetchCharacter(character);
      setCharacters(loadedCharacters);
    };

    if (character) {
      loadCharacters();
    }
  }, [character]);

  return(
      <div>
        <h2>Characters list</h2>
        <ul>
          {Array.isArray(characters) && characters.length ===0 && (
            <li>No Characters found</li>
          )}

          {Array.isArray(characters) &&
            characters.map((char) => (
              <li key={char._id}>
                  <Character name={char.name} imageUrl={char.imageUrl} media={char[selectedMedia]}/>
              </li>
            ))
          }

        </ul>
      </div>
  );
}