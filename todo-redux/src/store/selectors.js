import { createSelector } from '@reduxjs/toolkit';

export function selectNewTodo(state) {
  return state.newTodo;
}

// export const selectNewTodo = (state) => state.newTodo;
export function selectTodos(state) {
  return state.todos;
}

// export function selectTodosFiltered(state) {
//   const filter = selectFilter(state);
//   const todos = selectTodos(state);

//   if (filter === 'Completed') {
//     return todos.filter((t) => t.completed);
//   }

//   if (filter === 'Active') {
//     return todos.filter((t) => !t.completed);
//   }

//   return todos;
// }

export const selectTodosFiltered = createSelector(
  selectFilter,
  selectTodos,
  (filter, todos) => {
    console.log('call selectTodosFiltered');
    if (filter === 'Completed') {
      return todos.filter((t) => t.completed);
    }

    if (filter === 'Active') {
      return todos.filter((t) => !t.completed);
    }

    return todos;
  }
);

export function selectFilter(state) {
  return state.filter;
}

// memoized selector (met en cache le retour tant que les params sont
// identiques)
export const selectItemsLeft = createSelector(selectTodos, (todos) => {
  console.log('call selectItemsLeft');
  return todos.filter((t) => !t.completed).length;
});

// export function selectItemsLeft(state) {
//   const todos = selectTodos(state);
//   return todos.filter((t) => !t.completed).length;
// }
