import React from 'react';
import CounterV1 from './CounterV1';
import CounterV2 from './CounterV2';

function App() {
  return (
    <div className="App">
      <CounterV1 />
      <CounterV1 />
      <CounterV1 />
      <CounterV2 />
      <CounterV2 />
      <CounterV2 />
    </div>
  );
}

export default App;
