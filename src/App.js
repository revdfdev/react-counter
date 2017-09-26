import React, { Component } from 'react';

import PropTypes from 'prop-types';

class App extends Component {

  render() {
    const {values, onIncrement, onDecrement } = this.props;
    return (
      <div className="App">
      <h1>Simple counter</h1>
      <h3>{`Clicked ${values} times`}</h3>
      <button onClick = {onIncrement}>increase</button>
      <button onClick = {onDecrement}>decrease</button>
      </div>
    );
  }
}

App.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default App;
