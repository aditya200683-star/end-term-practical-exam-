import React, { useState } from "react";

function SumNumbers() {
  const [num, setNum] = useState("");
  const [sum, setSum] = useState(0);

  const calculateSum = () => {
    let total = 0;

    for (let i = 1; i <= Number(num); i++) {
      total += i;
    }

    setSum(total);
  };

  return (
    <div>
      <h2>Sum of Numbers from 1 to N</h2>

      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter a number"
      />

      <button onClick={calculateSum}>Calculate</button>

      <h3>Sum = {sum}</h3>
    </div>
  );
}

export default SumNumbers;