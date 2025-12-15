"use client";
import { useState } from "react";

export function Search({onSearch}){
  const [name, setName] = useState("")
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  }  
  
  function handleSubmit(event){
    event.preventDefault();
    onSearch(name);
    
  }
  
  return(
    <div className="justify-center my-10">
      <form onSubmit={handleSubmit}>
        <label className="text-white mr-2"> Enter Character Name:</label>
        <input required value={name} type="text" onChange={handleNameChange} className=" border-white bg-white"/>

        <button type="submit" className="bg-blue-300 rounded-2xl p-3 m-2">Search</button>
      </form>
    </div>
  );
}