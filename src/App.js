import React, { useState } from 'react';
import { CounterContext } from './CounterContext';
import Fcomponent from './Fcomponent';
import './App.css';

function App() {
  const[counter,setCounter] =useState(0);
  const increment =()=>{
    setCounter(counter+1);

  };

  const decrement =()=>{
    setCounter(counter-1);
  }
  return (
    <div className="App">
      <h1>counter App</h1>
      <h2>App Component</h2>
      <h3>{counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <CounterContext.Provider value={{counter,setCounter}}>
        <Fcomponent />

      </CounterContext.Provider>

      </div>
  );
}

export default App;