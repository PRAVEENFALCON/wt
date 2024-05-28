// Import the express module
const express = require('express');

// Import the os module
const os = require('os');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/system-info', (req, res) => {
    const systemInfo = {
        hostname: os.hostname(),
        platform: os.platform(),
        uptime: os.uptime(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        cpus: os.cpus().length
    };
    res.json(systemInfo);
});

// Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
