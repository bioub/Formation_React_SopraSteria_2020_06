import React, { useState } from 'react';
import TodoFooterContainer from './TodoFooter';
import TodoListContainer from './TodoList';
import TodoFormContainer from './TodoForm';

function App() {
  return (
    <div className="App">
      <TodoFormContainer />
      <TodoListContainer />
      <TodoFooterContainer />
    </div>
  );
}

export default App;
