import React, { useState, useEffect } from 'react';
import { getTasks } from '../../services/api';
import './index.css';

const TaskView = () => {
	const [tasks, setTasks] = useState([]);
	const [selectedTaskId, setSelectedTaskId] = useState(null);

	useEffect(() => {
		fetchTasks();
	}, []);

	const fetchTasks = async () => {
		try {
			const tasksData = await getTasks();
			setTasks(tasksData);
		} catch (error) {
			console.error('Error fetching tasks:', error);
		}
	};

	const handleTaskClick = (taskId) => {
		setSelectedTaskId(taskId);
	};

	return (
		<>
			<h2>Task List</h2>
			<div className="task-container">
				<ul>
					{tasks.map((task) => (
						<li
							key={task.taskid}
							onClick={() => handleTaskClick(task.taskid)}
							className={selectedTaskId === task.taskid ? 'active' : ''}
						>
							<div className="created">Created: {task.created_at}</div>
							<div className="description">Description: {task.description}</div>
							<div className="status">Status: {task.status}</div>
							<div className="priority">Priority: {task.priority}</div>
						</li>
					))}
				</ul>
			</div>
			{selectedTaskId && (
				<div className="task-details">
					<h3>Task Details</h3>
					<div>
						<div className="created">
							Created: {tasks[selectedTaskId - 1].created_at}
						</div>
						<div className="description">
							Description: {tasks[selectedTaskId - 1].description}
						</div>
						<div className="status">
							Status: {tasks[selectedTaskId - 1].status}
						</div>
						<div className="priority">
							Priority: {tasks[selectedTaskId - 1].priority}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default TaskView;
