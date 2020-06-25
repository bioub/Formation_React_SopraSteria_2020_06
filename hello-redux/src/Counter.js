import React, { useState } from 'react';

function Counter({ step = 1, setStep = () => {}, count = 0, setCount = () => {} }) {
  return (
    <div className="Counter">
      <label>
        Step :
        <input type="number" value={step} onChange={(event) => setStep(Number(event.target.value))} />
      </label>
      <button onClick={() => setCount(count + step)}>+</button>
      <button onClick={() => setCount(count - step)}>-</button>
      <div>Count {count}</div>
    </div>
  );
}

export default Counter;
