import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      format: 'HH:mm:ss',
      now: new Date(),
    };
  }
  componentDidMount() {
    const { delay = 1000 } = this.props;
    setInterval(() => {
      // Object.assign
      this.setState({
        now: new Date(),
      });
    }, delay);
  }
  render() {
    const { now } = this.state;
    return (
      <div className="Clock">
        {now.toLocaleTimeString()}
      </div>
    );
  }  
}

export default Clock;