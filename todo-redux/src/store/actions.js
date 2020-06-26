import { TODO_ADD, TODO_CHANGE, TODO_DELETE, TODO_TOGGLE_ALL_COMPLETED, TODO_UPDATE, TODO_FILTER_CHANGE, TODO_FETCH_REQUESTED, TODO_FETCH_SUCCESS, TODO_FETCH_ERROR } from "./constants";
import { createAction, nanoid } from "@reduxjs/toolkit";
import { fetchTodos } from "../api";

// export function todoChange(payload) {
//   return {
//     type: TODO_CHANGE,
//     payload,
//   }
// }

// export function todoAdd(payload) {
//   return {
//     type: TODO_ADD,
//     payload,
//   }
// }

export const todoChange = createAction(TODO_CHANGE);
// export const todoAdd = createAction(TODO_ADD);

export const todoAdd = createAction(TODO_ADD, function prepare(title) {
  return {
    payload: {
      id: nanoid(),
      title,
      completed: false,
    }
  }
});

export const todoDelete = createAction(TODO_DELETE);
export const todoUpdate = createAction(TODO_UPDATE);
export const todoFilterChange = createAction(TODO_FILTER_CHANGE);
export const todoToggleAllCompleted = createAction(TODO_TOGGLE_ALL_COMPLETED);

export const todoFetchRequested = createAction(TODO_FETCH_REQUESTED);
export const todoFetchSuccess = createAction(TODO_FETCH_SUCCESS);
export const todoFetchError = createAction(TODO_FETCH_ERROR);

export function todoFetch() {
  return function(dispatch) {
    dispatch(todoFetchRequested());
    fetchTodos()
      .then((data) => dispatch(todoFetchSuccess(data)))
      .catch((err) => dispatch(todoFetchError(err)))
  }
}