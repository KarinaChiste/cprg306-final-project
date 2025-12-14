"use client";
import Link from "next/link";
import { Character } from "./components/character";
import { Search } from "./components/search";
import { Media } from "./components/media";
import { useState } from "react";
import { MediaList } from "./components/media-list";



export default function Page(){
  const [charName, setCharName] = useState('');
  const [mediaSelection, setMediaSelction] = useState("films");
  

  return(
    <main>
      <h1>Once Upon a Character</h1>
      <Link href={"/theme-park-page"}>Theme Park Page</Link>
      <Search onSearch={setCharName}/>
      <MediaList onSelection={setMediaSelction}/>

      {/* <Character/> */}
      <Media character={charName} selectedMedia={mediaSelection}/>
    </main>
  )
}