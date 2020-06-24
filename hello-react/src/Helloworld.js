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

    // let helloJsx;

    // if (prenom.length) {
    //   helloJsx = <div>Hello {prenom} !</div>;
    // } else {
    //   helloJsx = <div>Rien n'a été saisi</div>;
    // }

    return (
      <div className="Helloworld">
        <div>
          Prénom : <input value={prenom} onChange={this.handleChange} />
        </div>
        {/* {Boolean(prenom.length) && <div>Hello {prenom} !</div>} */}
        {Boolean(prenom.length) ? (
          <div>Hello {prenom} !</div>
        ) : (
          <div>Rien n'a été saisi</div>
        )}
      </div>
    );
  }
}

export default Helloworld;
