const API_URL = 'http://localhost:3000'; // Update with your backend URL

export const createTask = async (taskData) => {
	try {
		const response = await fetch(`${API_URL}/tasks`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(taskData),
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data = await response.json();
		console.log('Success:', data);
		return data; // Return the data if needed
	} catch (error) {
		console.error('Error:', error);
		throw error; // Rethrow the error to handle it in the calling code
	}
};

export const getAllTasks = async () => {
	try {
		const response = await fetch(`${API_URL}/tasks`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
			},
		});
		return await response.json();
	} catch (error) {
		console.error('Error getting tasks:', error);
		throw error;
	}
};

export const deleteTask = async (taskid) => {
	try {
		const response = await fetch(`${API_URL}/tasks/${taskid}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json',
			},
		});
		console.log('Success:', taskid);
		return await response.json();
	} catch (error) {
		console.error('API.js Error deleting task:', error);
		throw error;
	}
};
