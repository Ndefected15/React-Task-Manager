import './index.css';
import NavBar from '../navBar';
import TaskForm from '../taskForm';
import TaskView from '../taskView';

const Layout = () => {
	return (
		<div className="app">
			<NavBar />
			<div className="page">
				<TaskView />
				<TaskForm />
			</div>
		</div>
	);
};

export default Layout;
