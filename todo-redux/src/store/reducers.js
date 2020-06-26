import { combineReducers } from 'redux';
import { TODO_CHANGE, TODO_ADD, TODO_DELETE, TODO_TOGGLE_ALL_COMPLETED, TODO_UPDATE, TODO_FILTER_CHANGE, TODO_FETCH_SUCCESS } from './constants';
import { createReducer, nanoid } from '@reduxjs/toolkit';
import { modify } from '../utilities/immutable-array';

const initialState = {
  filter: 'All', // All | Completed | Active
  newTodo: 'Achet',
  todos: [
    {
      id: 1,
      title: 'Acheter du pain',
      completed: false,
    },
    {
      id: 2,
      title: 'Aller au sport',
      completed: true,
    },
    {
      id: 3,
      title: 'Utiliser Redux',
      completed: false,
    },
  ],
};

// function newTodoReducer(state = initialState.newTodo, { type, payload }) {
//   switch (type) {
//     case TODO_CHANGE:
//       return payload;
//     default:
//       return state;
//   }
// }

// function todosReducer(state = initialState.todos, { type, payload }) {
//   switch (type) {
//     case TODO_ADD:
//       return [...state, payload];
//     default:
//       return state;
//   }
// }

const newTodoReducer = createReducer(initialState.newTodo, {
  [TODO_CHANGE]: (state, {payload}) => payload,
});


const todosReducer = createReducer(initialState.todos, {
  [TODO_ADD]: (state, {payload}) => [...state, payload],
  [TODO_DELETE]: (state, {payload}) => state.filter((todo) => todo.id !== payload.id),
  [TODO_UPDATE]: (state, {payload}) => modify(state, payload, state.findIndex((t) => t.id === payload.id)),
  [TODO_TOGGLE_ALL_COMPLETED]: (state, {payload}) => state.map((todo) => ({...todo, completed: payload})),
  [TODO_FETCH_SUCCESS]: (state, {payload}) => payload,
});

const filterReducer = createReducer(initialState.filter, {
  [TODO_FILTER_CHANGE]: (state, {payload}) => payload,
});

export const rootReducer = combineReducers({
  filter: filterReducer,
  newTodo: newTodoReducer,
  todos: todosReducer,
});

// export const rootReducer = combineReducers({
//   todolist: combineReducers({
//     newTodo: newTodoReducer,
//     todos: todosReducer,
//   }),
//   users: combineReducers({
//     newTodo: newTodoReducer,
//     todos: todosReducer,
//   }),
// })