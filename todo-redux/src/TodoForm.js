import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNewTodo } from "./store/selectors";
import { todoChange, todoAdd, todoToggleAllCompleted } from './store/actions';

function TodoForm({ value = '', onValueChange = () => {}, onNewTodo = () => {}, onToggleClick = () => {} }) {
  function handleSubmit(event) {
    event.preventDefault();
    onNewTodo(value);
  }

  return <form className="TodoForm" onSubmit={handleSubmit}>
    <input type="checkbox" onChange={(event) => onToggleClick(event.target.checked)} />
    <input type="text" value={value} onChange={(event) => onValueChange(event.target.value)} />
    <button>+</button>
  </form>;
}

function TodoFormContainer() {
  const value = useSelector(selectNewTodo);
  const dispatch = useDispatch();

  function onValueChange(value) {
    dispatch(todoChange(value))
  }
  
  function onNewTodo(value) {
    dispatch(todoAdd(value))
  }

  function onToggleClick(completed) {
    dispatch(todoToggleAllCompleted(completed))
  }

  // const { todoAdd: onNewTodo, todoChange: onValueChange } = bindActionCreators(
  //   {
  //     todoAdd,
  //     todoChange,
  //   },
  //   dispatch
  // );

  return <TodoForm value={value} onValueChange={onValueChange} onNewTodo={onNewTodo} onToggleClick={onToggleClick} />
}

export default TodoFormContainer;