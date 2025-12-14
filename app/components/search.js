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
    <div>
      <form onSubmit={handleSubmit}>
        <label> Enter Character Name:</label>
        <input required value={name} type="text" onChange={handleNameChange} />

        <button type="submit">Search</button>
      </form>
    </div>
  );
}