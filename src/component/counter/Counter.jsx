import { useState } from "react";
import CounterButton from "./CounterButton";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementMethodParent(by) {
    setCount(count + by);
  }

  function decremetnMethodParent(by) {
    if (count <= 0 || count - by <= 0) return setCount(0);
    setCount(count - by);
  }

  function resetCounter() {
    setCount(0);
  }

  return (
    <>
      <span className="totalCount">{count}</span>
      <CounterButton
        by={1}
        incrementMethod={incrementMethodParent}
        decrementMethod={decremetnMethodParent}
      />
      <CounterButton
        by={2}
        incrementMethod={incrementMethodParent}
        decrementMethod={decremetnMethodParent}
      />
      <CounterButton
        by={5}
        incrementMethod={incrementMethodParent}
        decrementMethod={decremetnMethodParent}
      />
      <button className="resetButton" onClick={resetCounter}>
        reset
      </button>
    </>
  );
}
