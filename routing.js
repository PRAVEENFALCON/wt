// app.js
const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route with a basic HTML form
app.get('/', (req, res) => {
  res.send(`
    <h1>Simple Form</h1>
    <form action="/data" method="POST">
    <label for="name">TRAINER NAME</label>
    <br>
    <input class="padding" type="text" id="name" required />
    <br><br><br>

    <label for="gender">GENDER</label>
    <br>
    <input type="radio" id="gender" name="male" required />Male
    <br>
    <input type="radio" id="gender" name="female"  />Female
    <br><br>

    <label for="dob">DATE OF BIRTH</label>
    <br>
    <input class="padding" type="date" id="dob" required/>
    <br><br><br>

    <label>Which Pokemon Region are you from :</label><br>
                    <select class="padding" required>  
                        <option selected disabled>SELECT ONE</option> 
                        <option>Kanto</option>
                        <option>Johto</option>
                        <option>Hoenn</option>
                        <option>Sinnoh</option>
                        <option>Unova</option>
                        <option>Kalos</option>
                    </select><br><br><br>
    <label for="email">E-MAIL</label>
    <br>
    <input class="padding" id="email" required />
    <br><br><br>
                
    <label for="password">Set The Password</label>
    <br>
    <input class="padding" type="password" id="password" required />
    <br><br>
                
    <label for="confirmPassword">Confirm The Password</label>
    <br>
    <input class="padding" type="password" id="confirmPassword" required />
    <br><br>
                
    <button class="hero-btn" type="submit">Register</button>
    </form>
  `);
});

// Define a POST route to handle form submission
app.post('/data', (req, res) => {
  const { name, email } = req.body;
  res.send(`
    <h1>Form Submitted Successfully</h1>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
