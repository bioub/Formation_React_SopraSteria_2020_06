import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const initialTodos = [
  {
    id: 123,
    title: 'Acheter du pain',
    completed: false,
  },
  {
    id: 456,
    title: 'Introduire React',
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [todoInput, setTodoInput] = useState('');

  return (
    <div className="App">
      <TodoForm
        value={todoInput}
        onValueChange={(val) => setTodoInput(val)}
        onNewTodo={(todo) => setTodos([...todos, todo])}
      />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
