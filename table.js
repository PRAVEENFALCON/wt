import React, { Component } from 'react';
import '/App.css'; // Corrected import statement

class App extends Component { // Corrected class declaration
  render() {
    return (
      <div className="App">
        <table>
          <thead> {/* Changed <th> to <thead> */}
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody> {/* Added <tbody> */}
            <tr>
              <td>Anom</td>
              <td>19</td>
              <td>Male</td>
            </tr>
            <tr>
              <td>Megha</td>
              <td>19</td>
              <td>Female</td>
            </tr>
            <tr>
              <td>Subham</td>
              <td>25</td>
              <td>Male</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
