import './App.css'; // Corrected CSS import statement
import React from 'react';

const data = [
  { name: "sai", age: 19, gender: "Male" },
  { name: "surya", age: 19, gender: "Female" },
  { name: "krishna", age: 25, gender: "Male" },
];

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;


