"use client";
export function Character(props){

  return(
    <div>
     
      <ul>
        <li>Name:{props.name}</li>
        <li>Image <img src={props.imageUrl} /> </li>
        <li>Media:
            <ul>
              {Array.isArray(props.media) &&
            props.media.map((iteration, index) => (
              <li key={index}>
                  {iteration}
              </li>
            ))}
            </ul>

        </li>
      </ul>
    </div>
  );
}