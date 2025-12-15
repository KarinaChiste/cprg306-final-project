"use client";
import Link from "next/link";
import { Search } from "./components/search";
import { Media } from "./components/media";
import { useState } from "react";
import { MediaList } from "./components/media-list";




export default function Page(){
  const [charName, setCharName] = useState('');
  const [mediaSelection, setMediaSelction] = useState("films");
  

  return(
    <main className="justify-center min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/castle.jpg')" }}>
        <div className="flex justify-center my-2">
          <img src="https://fontmeme.com/permalink/251215/e60a35015e19295ffc251891d2b33320.png" alt="Once upon a Character" border="0" />
        </div>
        
      {/* <h1 className="text-white text-4xl text-center font-[Luckiest Guy] ">Once Upon a Character</h1> */}
      <Link href={"/theme-park-page"} className="bg-green-300 p-5 border-black m-20 rounded-4xl my-50">Theme Park Page</Link>
      
      <div className="justify-center flex">
        <Search onSearch={setCharName}/>
        
       
      </div>
      <div className="flex justify-center">
        <MediaList onSelection={setMediaSelction}/>
      </div>
       <Media character={charName} selectedMedia={mediaSelection}/>
      <div className="p-10"/>
    </main>
  )
}