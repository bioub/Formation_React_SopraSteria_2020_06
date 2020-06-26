import { INCREMENT, DECREMENT, SET_STEP } from "./constants";
import { combineReducers } from "redux";

const initialState = { count: 0, step: 1 };

export function countReducer(state = initialState.count, {type, payload = 1}) {
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
}

export function stepReducer(state = initialState.step, {type, payload = 1}) {
  switch (type) {
    case SET_STEP:
      return payload;
    default:
      return state;
  }
}

// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case INCREMENT:
//     case DECREMENT:
//       return {
//         ...state,
//         count: countReducer(state.count, action),
//       };
//     case SET_STEP:
//       return {
//         ...state,
//         step: stepReducer(state.step, action),
//       };
//     default:
//       return state;
//   }
// }

// ou avec la fonction combineReducers
export const rootReducer = combineReducers({
  count: countReducer,
  step: stepReducer,
});


