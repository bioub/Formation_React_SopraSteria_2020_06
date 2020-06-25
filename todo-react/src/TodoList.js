import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ items = [] }) {
  return (
    <div className="TodoList">
      {items.map((it) => (
        <TodoItem key={it.id} item={it} />
      ))}
    </div>
  );
}

export default TodoList;
