import React from 'react';

function TodoItem({ item = {}, onDelete = () => {}, onChange = () => {}}) {
  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={(event) =>
          onChange({ ...item, completed: event.target.checked })
        }
      />
      <span>{item.title}</span>
      <button onClick={() => onDelete(item)}>-</button>
    </div>
  );
}
export default TodoItem;
