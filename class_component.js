import React, { Component } from 'react';

// Class component
class Greeting extends Component {
  render() {
    return <h1>In Class Components, we have , {this.props.name} which is use to return the react elements</h1>;
  }
}

// Usage
class App extends Component {
  render() {
    return <Greeting name="Render Function" />;
  }
}

export default App;
