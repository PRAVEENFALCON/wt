import React from 'react';

// Functional component
function Speech(props) {
  return <h1>This is, {props.name}</h1>;
}

// Usage
function App() {
  return <Speech name="Sai Praveen (160122749034)" />;
}


export default App;