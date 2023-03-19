import { lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';
import toast from 'react-hot-toast';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SaveIcon from '@mui/icons-material/Save';

import { toggleTheme } from '../features/theme/themeSlice';
import { resetTasks } from '../features/tasks/taskSlice';
import { clearTasks } from '../lib/local';
import { saveTasks } from '../lib/local';

const AddTaskNav = lazy(() => import('../components/AddTaskNav'));

const Header = () => {
	const darkMode = useSelector((state) => state.theme.darkMode);
	const tasks = useSelector((state) => state.tasks.tasks);
	const dispatch = useDispatch();
	const isMobile = useMediaQuery('(max-width:780px)');

	const handleDeleteAll = () => {
		dispatch(resetTasks());
		clearTasks();
	};

	const handleSaveTasks = () => {
		clearTasks();
		saveTasks(tasks);
		toast.success('Tasks Saved');
	};

	return (
		<header>
			<AppBar position='static' color='inherit'>
				<Toolbar>
					<Stack marginY={1} width='100%' display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
						<Stack direction='row' alignItems='center' spacing={1}>
							<Tooltip title='Todo App'>
								<ListAltIcon />
							</Tooltip>
							{isMobile ? (<></>) : (
								<Typography variant='h6' component='div'>Todo App</Typography>
							)}
						</Stack>

						{isMobile ? <></> : <AddTaskNav />}

						<Stack direction='row' alignItems='center' spacing={2}>
							<Tooltip title='Toggle Between Light or Dark Mode'>
								<IconButton size='large' edge='start' color='inherit' aria-label='theme' onClick={() => dispatch(toggleTheme())}>
									{darkMode ? <DarkModeIcon /> : <LightModeIcon />}
								</IconButton>
							</Tooltip>
							{isMobile ? (
								<></>
							) : (
								<>
									<Tooltip title='Save Tasks To Continue Later'>
										<IconButton size='large' edge='start' color='success' aria-label='save' onClick={handleSaveTasks}>
											<SaveIcon />
										</IconButton>
									</Tooltip>
									<Tooltip title='Delete All Tasks and Reset Todo App'>
										<IconButton size='large' edge='start' color='error' aria-label='reset' onClick={handleDeleteAll}>
											<DeleteForeverIcon />
										</IconButton>
									</Tooltip>
								</>
							)}
						</Stack>
					</Stack>
				</Toolbar>
			</AppBar>
		</header>
	);
};
export default Header;
