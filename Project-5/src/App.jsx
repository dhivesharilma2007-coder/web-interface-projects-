import { useState } from "react";
import "./App.css";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  function calculate(op) {
    let x = Number(a), y = Number(b);

    if (op === "+") setResult(x + y);
    if (op === "-") setResult(x - y);
    if (op === "*") setResult(x * y);
    if (op === "/") setResult(y !== 0 ? x / y : "Cannot divide by 0");
  }

  return (
    <div className="app">
      <div className="calculator">
        <h1>Simple Calculator</h1>

        <input
          type="number"
          placeholder="Enter first number"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter second number"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />

        <div>
          <button onClick={() => calculate("+")}>+</button>
          <button onClick={() => calculate("-")}>−</button>
          <button onClick={() => calculate("*")}>×</button>
          <button onClick={() => calculate("/")}>÷</button>
        </div>

        <h2>Result: {result}</h2>
      </div>
    </div>
  );
}

export default App;