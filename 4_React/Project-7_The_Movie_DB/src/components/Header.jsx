import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MovieIcon from '@mui/icons-material/Movie';

import useStore from '../lib/store';

const Header = () => {
	const darkMode = useStore((state) => state.darkMode);
	const setDarkMode = useStore((state) => state.setDarkMode);
	const isMobile = useMediaQuery('(max-width: 500px)');

	return (
		<header>
			<AppBar position='static'>
				<Toolbar>
					<Container maxWidth='xl'>
						<Stack direction='row' justifyContent='space-between' width='100%'>
							<Box display='flex' alignItems='center' gap={1}>
								<MovieIcon />
								{isMobile ? <></> : <Typography variant='h6'>The Movie DB</Typography>}
							</Box>
							<Box display='flex' justifyContent='space-between' alignItems='center' gap={3}>
								<Link component={NavLink} color='inherit' underline='none' to='/'>
									Home
								</Link>
								<Link component={NavLink} color='inherit' underline='none' to='/search'>
									Search DB
								</Link>
								<IconButton
									color='inherit'
									onClick={() => setDarkMode(!darkMode)}
									aria-label='dark mode switch'
								>
									{darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
								</IconButton>
							</Box>
						</Stack>
					</Container>
				</Toolbar>
			</AppBar>
			<Divider />
		</header>
	);
};

export default Header;