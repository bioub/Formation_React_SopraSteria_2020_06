import React, { useState } from 'react';
// imr

// ccc
function CounterV3() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  
  return (
    <div className="Counter">
      <label>
        Step :
        <input value={step} onChange={(event) => setStep(Number(event.target.value))} />
      </label>
      <button onClick={() => setCount(count + step)}>+</button>
      <button onClick={() => setCount(count - step)}>-</button>
      <div>Count {count}</div>
    </div>
  );
}

export default CounterV3;
