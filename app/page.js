"use client";
import Link from "next/link";
import { Character } from "./components/character";
import { Search } from "./components/search";
import { Media } from "./components/media";
import { useState } from "react";



export default function Page(){
  const [charName, setCharName] = useState('');
  
  return(
    <main>
      <h1>Once Upon a Character</h1>
      <Search onSearch={setCharName}/>
      {/* <Character/> */}
      <Media character={charName}/>
    </main>
  )
}