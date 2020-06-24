import React, { Component } from 'react';
// imr

// ccc
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      count: 0,
    };
  }
  render() {
    const { step = 1, count = 0 } = this.state;
    return (
      <div className="Counter">
        <label>
          Step :
          <input
            value={step}
            onChange={(event) =>
              this.setState({ step: Number(event.target.value) })
            }
          />
        </label>
        <button onClick={() => this.setState({ count: count + step })}>
          +
        </button>
        <button onClick={() => this.setState({ count: count - step })}>
          -
        </button>
        <div>Count {count}</div>
      </div>
    );
  }
}

export default Counter;
