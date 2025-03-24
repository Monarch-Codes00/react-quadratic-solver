import { useState } from "react";


function Mighty() {
    const [quadratic, setQuad] = useState({
        a: 0,
        b: 0,
        c: 0
    });
    const [result, setResult] = useState("");

    function almightyCal(a, b, c) {
        let d = (b * b) - (4 * a * c);
        if(d > 0){


        let x1 = (-b + Math.sqrt(d)) 
        / (2 * a);

        let x2 = (-b - Math.sqrt(d)) 
        / (2 * a);
        return `x1: ${x1}, x2: ${x2}`;
        }
    }

    function almightyCal2(a,b,c){
        let d = (b * b) - (4 * a * c);
        if(d<0){
            let x1 = (-b - Math.sqrt(Math.abs(d)))
             / (2 * a);
            let x2 = (-b + Math.sqrt(Math.abs(d))) 
            / (2 * a);
            return `x1: ${x1}, x2: ${x2}`;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const x = almightyCal(Number(quadratic.a),

         Number(quadratic.b),
         Number(quadratic.c));

        setResult(x);
        const x2 = almightyCal2(Number(quadratic.a),
        
        Number(quadratic.b),
         Number(quadratic.c));
        setResult(x2);
    };

    const handleSolve = (e) => {
        setQuad({ ...quadratic, [e.target.name]: e.target.value });
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{}}>
                <label htmlFor="a">Value for a:</label>
                <input type="numb" name="a" onChange={handleSolve} />

                <label htmlFor="b">Value for b:</label>
                <input type="numb" name="b" onChange={handleSolve} />

                <label htmlFor="c">Value for c:</label>
                <input type="numb" name="c" onChange={handleSolve} />

                <button type="submit">Solve for X</button>
            </form>

            {result && (<div style={{ width: "150px", padding: "10px" }}>{result}</div>)}
        </>
    );
}

export default Mighty;