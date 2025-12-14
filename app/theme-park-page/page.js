"use client";
import Link from "next/link";

import { Search } from "../components/search";
import { Media } from "../components/media";
import { useState } from "react";
import { MediaList } from "../components/media-list";




export default function Page(){
  const [charName, setCharName] = useState('');
  // const [mediaSelection, setMediaSelction] = useState("films");
  

  return(
    <main>
      <h1>Once Upon a Character</h1>
      <Link href={"../"}>Main Page</Link>
      <Search onSearch={setCharName}/>
      {/* <MediaList onSelection={setMediaSelction}/> */}

      <Media character={charName} selectedMedia={"parkAttractions"}/>
    </main>
  )
}