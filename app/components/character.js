"use client";
export function Character(props){

  return(
    <div>
     
      <ul>
        <li>Name:{props.name}</li>
        <li>Image <img src={props.imageUrl} /> </li>
        <li>Media</li>
      </ul>
    </div>
  );
}