const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3001' }));
// Middleware for parsing JSON bodies
app.use(express.json());

// Use task routes
app.use('/', taskRoutes);

// Start the Express.js server
app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
