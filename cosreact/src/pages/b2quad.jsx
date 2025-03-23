import React from "react";
import { useState } from "react";

const Quadraticcalc =()=>{

    const [formData, newSet] = useState({

        //this is where i initialised my variables first as 0

        a:0,
        b:0,
        c:0,
    });

    const [result, setResult] = useState(0);
    function realCalc(a, b, c){
 
        let equate1 =(Number(-b) + Math.sqrt(Number(b*b)-Number(4*a*c)))/(Number(2*a))
        let equate2 =(Number(-b) - Math.sqrt(Number(b*b)-Number(4*a*c)))/(Number(2*a))
        

        if(
            typeof(equate1)&&typeof(equate2)=="number"
        ){
            
            return equate1,equate2;
            


        }

        return realCalc;
    }

    return(


        <>
        

        <div>
            <form style={{width:"200px",display:"flex", flexDirection:'column', gap:'20px', marginLeft:"500px", marginTop:"-300px" }}>
                    <label htmlFor="a">ENTER "a" Here</label>
                    <input 
                     style={{height:"40px"}}
                    type="number" name="firstA"/>

                    <label htmlFor="a">ENTER "b" Here</label>
                    <input
                     style={{height:"40px"}}
                    type="number" name="secondB"/>

                    <label htmlFor="a">ENTER "c" Here</label>
                    <input 
                    style={{height:"40px"}}
                    type="number" name="thirdC"/>

                    <button style={{height:'40px', backgroundColor:"black", color:'white', border:'none'}} type="submit" >Calculate</button>
                
            </form>
        </div>
        <div type="result">Result is</div>
        <div type="result2"></div>
        
        </>
    )
}
export default Quadraticcalc;