import { TODO_ADD, TODO_CHANGE, TODO_DELETE, TODO_TOGGLE_ALL_COMPLETED, TODO_UPDATE, TODO_FILTER_CHANGE } from "./constants";
import { createAction, nanoid } from "@reduxjs/toolkit";

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