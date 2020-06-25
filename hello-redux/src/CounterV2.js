import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { setStep, increment, decrement } from './store/actions';
import { selectStep, selectCount } from './store/selectors';

function CounterV2() {
  const step = useSelector(selectStep);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <label>
        Step :
        <input type="number" value={step} onChange={(event) => dispatch(setStep(Number(event.target.value)))} />
      </label>
      <button onClick={() => dispatch(increment(step))}>+</button>
      <button onClick={() => dispatch(decrement(step))}>-</button>
      <div>Count {count}</div>
    </div>
  );
}

export default CounterV2;
