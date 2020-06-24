import React, { Component } from 'react';
// imr

// ccc
class CounterV1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      count: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  handleChange(event) {
    this.setState({ step: Number(event.target.value) });
  }
  increment() {
    const { step = 1, count = 0 } = this.state;
    this.setState({ count: count + step });
  }
  decrement() {
    const { step = 1, count = 0 } = this.state;
    this.setState({ count: count - step });
  }
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

export default CounterV1;
