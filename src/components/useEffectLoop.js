import React, { useState, useEffect } from "react";


export default function useEffectLoop() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  function increment() {
    setCount(count + 1);
    console.log(count)
  }

  function decrement() {
    setCount(count - 1);
    console.log(count)
  }

  //This is infinite loop useEffect will fire when state change ,
  //useEffect(() => setCount(count+10), console.log(count));
  //useEffect(() => console.log(count))

  return (
    <div className="App">
      <h1>Update Count!</h1>
      <p>Count: {count}</p>
      <p>{message}</p>

      <button>xxxx</button>
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>
    </div>
  );
}

