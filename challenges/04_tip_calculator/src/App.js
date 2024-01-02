import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [myValue, setMyValue] = useState("0");
  const [myFriendValue, setMyFriendValue] = useState("0");

  const options = [
    { key: "0", text: "Dissatisfied (0%)", value: 0 },
    { key: "1", text: "It was okay (5%)", value: 0.05 },
    { key: "2", text: "It was good (10%)", value: 0.1 },
    { key: "3", text: "Absolutely amazing! (20%)", value: 0.2 },
  ];

  function reset() {
    setBill(0);
    setMyValue(0);
    setMyFriendValue(0);
  }

  return (
    <div>
      <span>How much was the bill?</span>
      <input value={bill} onChange={(e) => setBill(Number(e.target.value))} />
      <BillInput
        options={options}
        currOption={myValue}
        setCurrOption={setMyValue}
      >
        How did you like the service?
      </BillInput>
      <BillInput
        options={options}
        currOption={myFriendValue}
        setCurrOption={setMyFriendValue}
      >
        How did your friend like the service?
      </BillInput>
      <Output bill={bill} myValue={myValue} myFriendValue={myFriendValue} />
      <Reset onReset={reset} />
    </div>
  );
}

function BillInput({ options, currOption, setCurrOption, children }) {
  return (
    <div>
      <span>{children} </span>
      <select
        value={currOption}
        onChange={(e) => setCurrOption(e.target.value)}
      >
        {options.map((option) => (
          <option value={Number(option.value)} key={option.key}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}

function Output({ bill, myValue, myFriendValue }) {
  if (bill === 0) return null;

  const myTotalValue = (bill * myValue) / 2;
  const myTotalFriendValue = (bill * myFriendValue) / 2;
  const total = bill + myTotalValue + myTotalFriendValue;
  return (
    <div style={{ paddingTop: "0.75em", paddingBottom: "0.75em" }}>
      <strong>
        You pay ${total.toFixed(2)} (${bill.toFixed(2)} + $
        {(myTotalValue + myTotalFriendValue).toFixed(2)} tip)
      </strong>
    </div>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
