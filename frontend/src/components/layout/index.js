import './index.css';
import NavBar from '../navBar';
import TaskForm from '../taskForm';

const Layout = () => {
	return (
		<div className="app">
			<NavBar />
			<div className="page">
				<TaskForm />
			</div>
		</div>
	);
};

export default Layout;
