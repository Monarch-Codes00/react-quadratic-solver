import React from "react";
import '../pages/styles/style.css'
import cos from '../assets/images.png'

const navo=[


    {
        logo:cos,
        firsttext: 'Products',
        secondtext:'Developers',
        thirdtext: 'Resources',
        fourthtext:'Contacts'
    }
];



const Cosmos =()=>{
    return(
<>


    <div className="container">
        {Characters.map((Props, char)=>(
         
         <div key={char} className="nav">
         <ul>
            
            <li>{Props.firsttext}</li>
            <li>{Props.secondtext}</li>
            <li>{Props.thirdtext}</li>
            <li>{Props.fourthtext}</li>
            
         </ul>
         
        
                    </div>

        ))}
    </div>
        
</>

    )
}