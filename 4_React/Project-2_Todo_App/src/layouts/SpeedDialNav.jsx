import { lazy, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Backdrop from '@mui/material/Backdrop';
import toast from 'react-hot-toast';

const AddIcon = lazy(() => import('@mui/icons-material/Add'));
const DeleteForeverIcon = lazy(() => import('@mui/icons-material/DeleteForever'));
const SaveIcon = lazy(() => import('@mui/icons-material/Save'));
const MenuIcon = lazy(() => import('@mui/icons-material/Menu'));
const CloseIcon = lazy(() => import('@mui/icons-material/Close'));

import { addTask, resetTasks } from '../features/tasks/taskSlice';
import { clearTasks, saveTasks } from '../lib/local';

const SpeedDialNav = () => {
	const dispatch = useDispatch();
	const tasks = useSelector((state) => state.tasks.tasks);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleDeleteAll = () => {
		dispatch(resetTasks());
		clearTasks();
		setOpen(false);
	};

	const handleSaveTasks = () => {
		clearTasks();
		saveTasks(tasks);
		setOpen(false);
		toast.success('Tasks Saved');
	};

	const handleAddTask = () => {
		dispatch(addTask({ title: 'New Task Title', description: 'New Task Description', status: 0 }));
		setOpen(false);
	};

	const actions = [
		{ icon: <DeleteForeverIcon color='error' />, name: 'Reset', onClick: handleDeleteAll },
		{ icon: <SaveIcon color='success' />, name: 'Save', onClick: handleSaveTasks },
		{ icon: <AddIcon color='warning' />, name: 'Add', onClick: handleAddTask }
	];

	return (
		<Box>
			<Backdrop open={open} />
			<SpeedDial
				ariaLabel='Navigation'
				icon={<SpeedDialIcon openIcon={<CloseIcon />} icon={<MenuIcon />} />}
				sx={{ position: 'fixed', bottom: 32, right: 32 }}
				open={open}
				onOpen={handleOpen}
				onClose={handleClose}
			>
				{actions.map((action) => (
					<SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={action.onClick} tooltipOpen />
				))}
			</SpeedDial>
		</Box>
	);
};

export default SpeedDialNav;
