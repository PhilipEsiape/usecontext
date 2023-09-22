import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";


function Fcomponent(){
    const{counter, setCounter}= useContext(CounterContext)
    return(
        <div className="App1">
        <h2>function Component</h2>
        <h3>{counter}</h3>
        <button onClick={()=> setCounter (counter + 1)}>Increment</button>
        <Fchild />
        
        
        </div>
    )
}

const Fchild=()=>{
    const{ counter, setCounter } = useContext(CounterContext);
    return(
    <div className="App1">
        <h2>function Child Component</h2>
        <h3>{counter}</h3>
        <button onClick={()=> setCounter (counter - 1)}>Decrement</button>

    </div>
    );
}
export default Fcomponent;