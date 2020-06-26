import React from 'react';
import TodoItem from './TodoItem';
import { selectTodosFiltered } from './store/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { todoDelete, todoUpdate } from './store/actions';

function TodoList({ items = [], onDelete = () => {}, onChange = () => {} }) {
  return (
    <div className="TodoList">
      {items.map((it) => (
        <TodoItem key={it.id} item={it} onDelete={onDelete} onChange={onChange} />
      ))}
    </div>
  );
}

function TodoListContainer() {
  const items = useSelector(selectTodosFiltered);
  const dispatch = useDispatch();

  function onDelete(todo) {
    dispatch(todoDelete(todo));
  }

  function onChange(todo) {
    dispatch(todoUpdate(todo));
  }

  return <TodoList items={items} onDelete={onDelete} onChange={onChange} />
}

export default TodoListContainer;