import React from 'react';
import './App.css';
import Hello from './Hello';
import Clock from './Clock';
import CounterV1 from './CounterV1';
import CounterV2 from './CounterV2';
import CounterV3 from './CounterV3';

function App() {
  const prenom = 'Romain';
  return (
    <div className="App">
      <Hello name="Romain" />
      <Hello name={prenom} />
      <Clock delay={3000} />
      <CounterV1 />
      <CounterV2 />
      <CounterV3 />
    </div>
  );
}

export default App;
