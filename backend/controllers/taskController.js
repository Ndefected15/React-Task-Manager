const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
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
			}
			console.log('1 record inserted');
			res.status(201).send('Task created successfully'); // Send a success response
		});
	} catch (err) {
		console.error(err);
		res.status(500).send('Error inserting task'); // Send an error response
	}
};

exports.getAllTasks = async (req, res) => {
	try {
		const query = 'SELECT * FROM tasks';

		connection.query(query, function (err, rows) {
			if (err) {
				console.error(err);
				res.status(500).send('Error retrieving tasks');
			} else {
				console.log('Tasks Retrieved');
				res.status(200).json(rows); // Sending tasks data as JSON response
			}
		});
	} catch (err) {
		console.error(err);
		res.status(500).send('Error retrieving tasks');
	}
};

exports.deleteTask = async (req, res) => {
	try {
		const { taskid } = req.params;

		const query = 'DELETE FROM tasks WHERE taskid =?';
		const values = [taskid];

		connection.query(query, values, function (err, result) {
			if (err) {
				console.error(err);
				res.status(500).send('Error deleting task');
			} else {
				console.log('1 record deleted');
				res.status(200).send('Task deleted successfully');
			}
		});
	} catch (err) {
		console.error(err);
		res.status(500).send('Error deleting task');
	}
};
