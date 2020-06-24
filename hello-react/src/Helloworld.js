import React, { Component } from 'react';

class Helloworld extends Component {
  state = {
    prenom: 'Romain',
  };
  handleChange = (event) => {
    this.setState({ prenom: event.target.value });
  };
  render() {
    const { prenom = '' } = this.state;
    return (
      <div className="Helloworld">
        <div>
          Prénom : <input value={prenom} onChange={this.handleChange} />
        </div>
        <div>Hello {prenom} !</div>
      </div>
    );
  }
}

export default Helloworld;
