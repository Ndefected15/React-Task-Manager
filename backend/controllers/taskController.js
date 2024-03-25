const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'newuser',
	password: 'password',
	database: 'tasks',
});

connection.connect(function (err) {
	if (err) throw err;
	console.log('Connected to MySQL!');
});

exports.createTask = async (req, res) => {
	try {
		const { description, status, priority, due_date } = req.body;

		// Check if required fields are present
		if (!description || !status || !priority || !due_date) {
			return res.status(400).send('Missing required fields');
		}

		const query =
			'INSERT INTO tasks (description, status, priority, due_date) VALUES (?,?,?,?)';
		const values = [description, status, priority, due_date];

		connection.query(query, values, function (err, result) {
			if (err) {
				console.error(err);
				return res.status(500).send('Error inserting task');
			}
			console.log('1 record inserted');
			res.status(201).send('Task created successfully'); // Send a success response
		});
	} catch (err) {
		console.error(err);
		res.status(500).send('Error inserting task'); // Send an error response
	}
};
