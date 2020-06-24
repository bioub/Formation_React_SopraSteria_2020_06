import React from 'react';
import './App.css';
import Hello from './Hello';
import Clock from './Clock';
import Counter from './Counter';

function App() {
  const prenom = 'Romain';
  return (
    <div className="App">
      <Hello name="Romain" />
      <Hello name={prenom} />
      <Clock delay={3000} />
      <Counter />
    </div>
  );
}

export default App;
