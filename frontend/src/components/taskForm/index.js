import React, { useState } from 'react';
import { createTask } from '../../services/api';
import './index.css';

const TaskForm = () => {
	const [formData, setFormData] = useState({
		description: '',
		status: '',
		priority: '',
		due_date: '',
		created_at: getCurrentTimestamp(),
	});

	function getCurrentTimestamp() {
		return new Date().toISOString();
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await createTask(formData); // Pass the formData to the createTask function
			console.log('Task created successfully');
			// Optionally, clear the form after successful submission
			setFormData({
				description: '',
				status: '',
				priority: '',
				due_date: '',
				created_at: getCurrentTimestamp(),
			});
		} catch (error) {
			console.error('Error creating task:', error);
		}
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<label htmlFor="description">Description</label>
				<input
					type="text"
					name="description"
					id="description"
					value={formData.description}
					onChange={handleChange}
				/>
				<label htmlFor="status">Status</label>
				<select
					name="status"
					id="status"
					value={formData.status}
					onChange={handleChange}
				>
					<option value="" className="placeholder" hidden>
						Choose Status
					</option>
					<option value="To Do">To Do</option>
					<option value="In Progress">In Progress</option>
					<option value="Completed">Completed</option>
				</select>

				<label htmlFor="priority">Priority</label>
				<input
					type="text"
					name="priority"
					id="priority"
					value={formData.priority}
					onChange={handleChange}
				/>
				<label htmlFor="due_date">Due Date</label>
				<input
					type="date"
					name="due_date"
					id="due_date"
					value={formData.due_date}
					onChange={handleChange}
				/>
				{/* Hidden input field for created_at */}
				<input
					type="hidden"
					name="created_at"
					id="created_at"
					value={formData.created_at}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default TaskForm;
