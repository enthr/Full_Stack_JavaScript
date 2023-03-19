import { useState, useEffect, lazy } from 'react';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';

const TaskIcon = lazy(() => import('@mui/icons-material/Task'));
const LoopIcon = lazy(() => import('@mui/icons-material/Loop'));
const CheckCircleIcon = lazy(() => import('@mui/icons-material/CheckCircle'));

const TaskList = lazy(() => import('../components/TaskList'));

const Home = () => {
	const tasks = useSelector((state) => state.tasks.tasks);
	const [todos, setTodos] = useState([]);
	const [inProgress, setInProgress] = useState([]);
	const [completed, setCompleted] = useState([]);
	const isMobile = useMediaQuery('(max-width:780px)');

	useEffect(() => {
		const addTasks = () => {
			setTodos(tasks.filter((task) => task.status === 0));
			setInProgress(tasks.filter((task) => task.status === 1));
			setCompleted(tasks.filter((task) => task.status === 2));
		};
		addTasks();
	}, [tasks]);

	const Lists = [
		{
			label: 'To-Do',
			color: 'primary',
			icon: <TaskIcon />,
			tasks: todos,
			status: 0
		},
		{
			label: 'In Progress',
			color: 'secondary',
			icon: <LoopIcon />,
			tasks: inProgress,
			status: 1
		},
		{
			label: 'Completed',
			color: 'success',
			icon: <CheckCircleIcon />,
			tasks: completed,
			status: 2
		}
	];

	return (
		<DndProvider backend={HTML5Backend}>
			<Stack marginY={5} direction={(isMobile) ? 'column' : 'row'} justifyContent='center' alignItems='center' spacing={4} height={(isMobile) ? '' : '80vh'}>
				{Lists.map(({ label, color, icon, tasks, status }) => (
					<TaskList key={label} label={label} color={color} icon={icon} tasks={tasks} status={status} />
				))}
			</Stack>
		</DndProvider>
	);
};

export default Home;
