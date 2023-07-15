import React, { useEffect, useState } from "react";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

const CurrencyConvertor = () => {
  const [amount, setAmount] = useState(1);
  const [formCur, setFromCur] = useState("USD");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState(null);

  useEffect(
    function () {
      async function fetchData() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${formCur}&to=${toCur}`
        );
        const data = await res.json();
        setConverted(data.rates[toCur]);
      }
      if (formCur === toCur) return setAmount(amount);
      fetchData();
    },
    [amount, formCur, toCur]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={formCur} onChange={(e) => setFromCur(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toCur} onChange={(e) => setToCur(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{converted}</p>
    </div>
  );
};

export default CurrencyConvertor;
