import { SET_STEP, INCREMENT, DECREMENT } from './constants';

export function setStep(step) {
  return { type: SET_STEP, payload: step };
}

export function increment(step) {
  return { type: INCREMENT, payload: step };
}

export function decrement(step) {
  return { type: DECREMENT, payload: step };
}
