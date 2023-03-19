import { useEffect, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { loadTasks } from './lib/local';
import { loadSavedTasks } from './features/tasks/taskSlice';
import styles from './features/theme/styles';
import PacmanSpinnerLoad from './components/PacmanSpinnerLoad';

const Header = lazy(() => import('./layouts/Header'));
const Footer = lazy(() => import('./layouts/Footer'));
const SpeedDialNav = lazy(() => import('./layouts/SpeedDialNav'));

const App = () => {
	const dispatch = useDispatch();
	const isMobile = useMediaQuery('(max-width:780px)');
	const darkMode = useSelector((state) => state.theme.darkMode);
	styles.palette.mode = darkMode ? 'dark' : 'light';
	const theme = createTheme(styles);

	useEffect(() => {
		const homeLoader = async () => {
			const savedTasks = await loadTasks();
			if (savedTasks) {
				await dispatch(loadSavedTasks(savedTasks));
			}
		};
		homeLoader();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Suspense fallback={<PacmanSpinnerLoad />}>
				<Header />
				<main>
					<Outlet />
				</main>
				<Footer />
				{isMobile ? <SpeedDialNav /> : <></>}
			</Suspense>
			<Toaster
				position='bottom-right'
				gutter={16}
				toastOptions={{
					duration: 1000,
					success: { style: { background: 'green', color: 'white' } },
					error: { style: { background: 'red', color: 'white' } }
				}}
			/>
		</ThemeProvider>
	);
};

export default App;
