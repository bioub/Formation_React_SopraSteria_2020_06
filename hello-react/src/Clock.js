import React, { Component } from 'react';
import { format } from 'date-fns';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      format: 'HH:mm',
      now: new Date(),
    };
  }
  componentDidMount() {
    const { delay = 1000 } = this.props;
    this._interval = setInterval(() => {
      // Object.assign
      this.setState({
        now: new Date(),
      });
    }, delay);
  }
  componentWillUnmount() {
    clearInterval(this._interval);
  }
  render() {
    const { now, format: formatDate } = this.state;
    return (
      <div className="Clock">
        {format(now, format)}
      </div>
    );
  }  
}

export default Clock;