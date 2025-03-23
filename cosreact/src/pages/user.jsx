// import { useState } from "react";

// function usest(){
//     const [off, setactive]=useState(true);
//     const status = ()=>{
//         setactive(off) => off ;

//     }

//     const status = (){
//         setactive(off) =>
//         }
//     return(
//         <div>
//             <h2></h2>
//             <button onClick={setactive}>on</button>
//             <button onClick={setactive}>off</button>
//         </div>
//     )
// }

// import { useState } from "react";
// const Switch =()=>{

// }
//read about react hooks and explain extensively on useState

// import React, {useState} from "react";
// function Changerbuttono(){
//     const[mainstatte, setNew] = useState("ON");

//     return(
//         <>
//             <h1>{mainstatte}</h1>
//             <button type="button" onClick={()=> setNew("OFF")}>Deactivate</button>

//             <button type="button" onClick={()=> setNew("ON")}>Activate</button>

//         </>
//     )
// }
// export default Changerbuttono;


import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [state, setColor] = useState("red");
    
  return (
    <>
      <h1> {state}.</h1>
      <button
        type="button"
        onClick={() => setColor("ON")}
      >ACTIVATE</button>
      <button
        type="button"
        onClick={() => setColor("OFF")}
      >DEACTIVATE</button>
     
      <button
        type="button"
        onClick={() => setColor("Neutral")}
      >NEUTRAL</button>
    </>
  );
}

export default FavoriteColor;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);