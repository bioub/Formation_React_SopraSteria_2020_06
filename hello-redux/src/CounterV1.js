import React from 'react';
import { connect } from 'react-redux';
import { setStep, increment, decrement } from './store/actions';
import { selectStep, selectCount } from './store/selectors';
import { bindActionCreators } from 'redux';

function CounterV1({
  step = 1,
  setStep = () => {},
  count = 0,
  increment = () => {},
  decrement = () => {},
}) {
  return (
    <div className="Counter">
      <label>
        Step :
        <input
          type="number"
          value={step}
          onChange={(event) => setStep(Number(event.target.value))}
        />
      </label>
      <button onClick={() => increment(step)}>+</button>
      <button onClick={() => decrement(step)}>-</button>
      <div>Count {count}</div>
    </div>
  );
}

// function CounterContainerV1() {
//   return <CounterV1 step={store.getState().step} />;
// }

function mapStateToProps(state) {
  return {
    step: selectStep(state),
    count: selectCount(state),
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     setStep(step) {
//       dispatch(setStep(step));
//     },
//     increment(step) {
//       dispatch(increment(step));
//     },
//     decrement(step) {
//       dispatch(decrement(step));
//     }
//   };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setStep,
    increment,
    decrement,
  }, dispatch);
}

const enhance = connect(mapStateToProps, mapDispatchToProps);
const CounterContainerV1 = enhance(CounterV1);

export default CounterContainerV1;
