import React, { useState } from 'react';
import './App.css';
import Hello from './Hello';
import Clock from './Clock';
import CounterV1 from './CounterV1';
import CounterV2 from './CounterV2';
import CounterV3 from './CounterV3';
import Helloworld from './Helloworld';
import Dropdown from './Dropdown';

function App() {
  const [show, setShow] = useState(true);
  const [prenom, setPrenom] = useState('Eric');
  return (
    <div className="App">
      <Hello name="Romain" />
      <Hello name={prenom} />
      <button onClick={() => setShow(!show)}>Off</button>
      {show && <Clock delay={1000} />}
      <CounterV1 />
      <CounterV2 />
      <CounterV3 />
      <Helloworld />
      <Dropdown
        items={['Romain', 'Jean', 'Eric']}
        selected={prenom}
        onSelected={(prenom) => setPrenom(prenom)}
      />
    </div>
  );
}

export default App;
