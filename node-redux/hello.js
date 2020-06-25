// équivalent CommonJS (cjs) aux import ECMAScript
const redux = require("redux");

const initialState = { count: 0, step: 1 };

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const SET_STEP = 'SET_STEP';

// Reducer doit être immuable
// const nextState = reducer(state, action);
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + state.step,
      };
      case DECREMENT:
      return {
        ...state,
        count: state.count - state.step,
      };
      case SET_STEP:
      return {
        ...state,
        step: action.step,
      };
    default:
      return state;
  }
}

/** @type {import('redux').Store} */
const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log("subscribe/global listener");
  console.log(store.getState());
});

// store.dispatchEvent(new Event('click'))
store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: SET_STEP, step: 10 });
store.dispatch({ type: INCREMENT });
