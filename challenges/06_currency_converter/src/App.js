import { useEffect, useState } from "react";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [quantity, setQuantity] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("USD");
  const [result, setResult] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function calculate() {
        try {
          setError("");
          setIsLoading(true);

          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${Number(
              quantity
            )}&from=${currency1}&to=${currency2}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error("Something went wrong");

          const data = await res.json();
          setResult(data.rates[currency2]);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (quantity <= 0 || currency1 === "" || currency2 === "") return;

      if (currency1 === currency2) return setResult(quantity);

      calculate();

      return function () {
        controller.abort();
      };
    },
    [quantity, currency1, currency2]
  );

  return (
    <div>
      <input
        type="text"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <select value={currency1} onChange={(e) => setCurrency1(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={currency2} onChange={(e) => setCurrency2(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {isLoading && <p>Loading...</p>}
      {!isLoading && !error && (
        <p>
          {result} {currency2}
        </p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
