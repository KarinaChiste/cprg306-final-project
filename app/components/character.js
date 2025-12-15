"use client";
export function Character(props){

  return(
    <div className="border-black rounded-2xl  m-4 mx-150 p-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white">
     
      <ul >
        <li className="text-center">{props.name}</li>
        
        <li> <p className="font-bold">Matching {props.chosenMedia}:</p>
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
      <img src={props.imageUrl} /> 
    </div>
  );
}