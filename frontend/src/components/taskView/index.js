import React, { useState, useEffect } from 'react';
import { getAllTasks, deleteTask } from '../../services/api';
import './index.css';

const TaskView = () => {
	const [tasks, setTasks] = useState([]);
	const [selectedTaskId, setSelectedTaskId] = useState(null);

	useEffect(() => {
		fetchTasks();
	}, []);

	const fetchTasks = async () => {
		try {
			const tasksData = await getAllTasks();
			setTasks(tasksData);
		} catch (error) {
			console.error('Error fetching tasks:', error);
		}
	};

	const removeTask = async (taskid) => {
		try {
			await deleteTask(taskid);
			fetchTasks();
		} catch (error) {
			console.error('index.js Error deleting task:', error);
		}
	};

	const handleTaskClick = (taskid) => {
		setSelectedTaskId(taskid);
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
			{selectedTaskId !== null && (
				<div className="task-details">
					<h3>Task Details</h3>
					<div>
						<div className="created">
							Created:{' '}
							{tasks.find((task) => task.taskid === selectedTaskId)?.created_at}
						</div>
						<div className="description">
							Description:{' '}
							{
								tasks.find((task) => task.taskid === selectedTaskId)
									?.description
							}
						</div>
						<div className="status">
							Status:{' '}
							{tasks.find((task) => task.taskid === selectedTaskId)?.status}
						</div>
						<div className="priority">
							Priority:{' '}
							{tasks.find((task) => task.taskid === selectedTaskId)?.priority}
						</div>
						<button onClick={() => removeTask(selectedTaskId)}>
							Delete Task
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default TaskView;
