import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
    state = {
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", this.state);
    };

    render() {
        return (
            <div style={{ margin: "auto", marginTop: "20px", textAlign: "center" }}>
                
                <img src="https://images.collegedunia.com/public/college_data/images/campusimage/14092102933.jpg" alt="Image" style={{ maxWidth: "30%" }} />
                <form onSubmit={this.onFormSubmit} style={{ backgroundColor: "green", padding: "20px", borderRadius: "8px", marginTop: "20px", maxWidth: "500px", margin: "0 auto" }}>
                    <label>First Name:</label>
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(e) => this.setState({ firstName: e.target.value })}
                    />
                    <br />
                    <br />
                    <label>Middle Name:</label>
                    <input
                        type="text"
                        value={this.state.middleName}
                        onChange={(e) => this.setState({ middleName: e.target.value })}
                    />
                    <br />
                    <br />
                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(e) => this.setState({ lastName: e.target.value })}
                    />
                    <br />
                    <br />
                    <label>Email Id:</label>
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <br />
            </div>
        );
    }
}
export default App;