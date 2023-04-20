import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';

import useStore from './lib/store';
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
	const darkMode = useStore((state) => state.darkMode);

	const theme = createTheme({
		palette: {
			mode: darkMode ? 'dark' : 'light'
		}
	});
	
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Header />
				<main>
					<Outlet />
				</main>
				<Footer />
			</ThemeProvider>
		</Suspense>
	);
};

export default App;