// api.js

export const createTask = async (taskData) => {
	try {
		const response = await fetch('http://localhost:3000/tasks', {
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
