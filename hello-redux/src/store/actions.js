import { SET_STEP, INCREMENT, DECREMENT } from './constants';

function createActionCreator(type) {
  return function (payload) {
    return {
      type, payload
    }
  }
}

// export function setStep(step) {
//   return { type: SET_STEP, payload: step };
// }

export const setStep = createActionCreator(SET_STEP);

export function increment(step) {
  return { type: INCREMENT, payload: step };
}

export function decrement(step) {
  return { type: DECREMENT, payload: step };
}
