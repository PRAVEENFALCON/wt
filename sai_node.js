const express = require("express");
const app = express();
const os = require("os");

const systemUptime = os.uptime();

const userInfo = os.userInfo();

const otherInfo = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

app.get("/", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>System Information</title>
        </head>
        <body>
            <h1>System Information</h1>
            <p>System Uptime: ${systemUptime} seconds</p>
            <p>User Information:</p>
            <pre>${JSON.stringify(userInfo, null, 2)}</pre>
            <p>Other Information:</p>
            <pre>${JSON.stringify(otherInfo, null, 2)}</pre>
        </body>
        </html>
    `);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log("Server running at http://localhost:${port}");
});