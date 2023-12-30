import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const defaultDate = new Date(2027, 5, 21);
  defaultDate.setDate(defaultDate.getDate() + count);

  function incrementCount() {
    setCount((c) => c + step);
  }

  function decrementCount() {
    setCount((c) => c - step);
  }

  return (
    <div className="App">
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={decrementCount}>-</button>
        <input
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
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

      {count !== 0 || step !== 1 ? (
        <>
          <button
            onClick={() => {
              setCount((c) => 0);
              setStep((s) => 1);
            }}
          >
            Reset
          </button>
        </>
      ) : null}
    </div>
  );
}
