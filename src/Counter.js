import { useState } from "react";
import "./App.css";

//ima problem so brojacho
export function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("grey");

  function setBackground() {
    if (count < 0) {
      setColor("red");
    } else if (count > 0 && count < 6) {
      setColor("yellow");
    } else if (count == 0) {
      setColor("grey");
    } else {
      setColor("green");
    }
  }

  function handleIncrement() {
    setCount(count + 1);
    setBackground();
  }

  function handleDecrement() {
    setCount(count - 1);
    setBackground();
  }

  function handleReset() {
    setCount(0);
    setBackground();
  }

  return (
    <div className={`counter-container ${color}`}>
      <h2>Counter</h2>
      {count} <br />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
