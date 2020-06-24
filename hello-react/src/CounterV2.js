import React, { Component } from 'react';
// imr

// ccc
class CounterV2 extends Component {
  state = {
    step: 1,
    count: 0,
  };
  handleChange = (event) => {
    this.setState({ step: Number(event.target.value) });
  };
  increment = () => {
    const { step = 1, count = 0 } = this.state;
    this.setState({ count: count + step });
  };
  decrement = () => {
    const { step = 1, count = 0 } = this.state;
    this.setState({ count: count - step });
  };
  render() {
    const { step = 1, count = 0 } = this.state;
    return (
      <div className="Counter">
        <label>
          Step :
          <input value={step} onChange={this.handleChange} />
        </label>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <div>Count {count}</div>
      </div>
    );
  }
}

export default CounterV2;
