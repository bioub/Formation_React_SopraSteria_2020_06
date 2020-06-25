import { createStore } from "redux";
import { rootReducer } from "./reducers";

export function configureStore() {
  /** @type {import('redux').Store} */
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}