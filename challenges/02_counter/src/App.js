import { useState } from "react";

export default function App() {
  const defaultDate = new Date(2027, 5, 21);
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  defaultDate.setDate(defaultDate.getDate() + count);

  function decrementStep() {
    setStep((s) => s - 1);
  }

  function incrementStep() {
    setStep((s) => s + 1);
  }

  function incrementCount() {
    setCount((c) => c + step);
  }

  function decrementCount() {
    setCount((c) => c - step);
  }

  return (
    <div className="App">
      <div>
        <button onClick={decrementStep}>-</button>
        <span>Step:{step}</span>
        <button onClick={incrementStep}>+</button>
      </div>

      <div>
        <button onClick={decrementCount}>-</button>
        <span>Count:{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>

      <div>
        <p>
          {count === 0 && `Today is ${defaultDate.toDateString()}`}
          {count > 0 &&
            `${count} days from today ${defaultDate.toDateString()}`}
          {count < 0 &&
            `${count * -1} days ago was ${defaultDate.toDateString()}`}
        </p>
      </div>
    </div>
  );
}
