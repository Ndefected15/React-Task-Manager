import './App.css';
import { Routes, Route } from 'react-router-dom';
import TaskForm from './components/taskForm';
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<TaskForm />} />
			</Routes>
		</>
	);
}

export default App;
