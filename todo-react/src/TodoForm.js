import React from 'react';

function TodoForm({ value = '', onValueChange = () => {}, onNewTodo = () => {} }) {

  function handleSubmit(event) {
    event.preventDefault();

    onNewTodo({
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      title: value,
      completed: false,
    });
  }

  return <form className="TodoForm" onSubmit={handleSubmit}>
    <input type="text" value={value} onChange={(event) => onValueChange(event.target.value)} />
    <button>+</button>
  </form>;
}

export default TodoForm;