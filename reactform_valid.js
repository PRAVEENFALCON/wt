import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [region, setRegion] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validate = (event) => {
    event.preventDefault();

    const nameRegex = /^[A-Za-z\s]{5,}$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[a-z]{3,}\.[a-z]{2,3}$/;

    if (!name.match(nameRegex)) {
      alert("Enter a Valid Trainer Name");
      return;
    }

    if (!email.match(emailRegex)) {
      alert("Enter a Valid E-Mail Id");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!password.match(passRegex)) {
      alert("Password length must be at least 8 Characters, at least one lowercase letter, at least one uppercase letter, at least one digit, at least one special character");
      return;
    }

    console.log("Form submitted successfully");
  };

  return (
    <div className="container">
      <h1 className="head">POKEMON GO</h1>
      <h2>Trainer Account</h2>
      <div className="card2">
        <form onSubmit={validate}>
          <label htmlFor="name">TRAINER NAME</label>
          <br />
          <input
            className="padding"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br /><br /><br />
          
          <label htmlFor="gender">GENDER</label>
          <br />
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={(e) => setGender(e.target.value)}
            required
          /> Male
          <br />
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          /> Female
          <br /><br />
          
          <label htmlFor="dob">DATE OF BIRTH</label>
          <br />
          <input
            className="padding"
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          <br /><br /><br />
          
          <label>Which Pokemon Region are you from:</label>
          <br />
          <select
            className="padding"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            required
          >
            <option value="" disabled selected>SELECT ONE</option>
            <option value="Kanto">Kanto</option>
            <option value="Johto">Johto</option>
            <option value="Hoenn">Hoenn</option>
            <option value="Sinnoh">Sinnoh</option>
            <option value="Unova">Unova</option>
            <option value="Kalos">Kalos</option>
          </select>
          <br /><br /><br />
          
          <label htmlFor="email">E-MAIL</label>
          <br />
          <input
            className="padding"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br /><br /><br />
          
          <label htmlFor="password">Set The Password</label>
          <br />
          <input
            className="padding"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br /><br />
          
          <label htmlFor="confirmPassword">Confirm The Password</label>
          <br />
          <input
            className="padding"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <br /><br />
          
          <button className="hero-btn" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default App;
