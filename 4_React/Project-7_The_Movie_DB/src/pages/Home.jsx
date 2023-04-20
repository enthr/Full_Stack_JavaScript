import { lazy } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';

import useStore from '../lib/store';
const MovieCard = lazy(() => import('../components/MovieCard'));

const Home = () => {
	const darkMode = useStore((state) => state.darkMode);
	const isMobile = useMediaQuery('(max-width: 768px)');

	const tabIndex = useStore((state) => state.tabIndex);
	const setTabIndex = useStore((state) => state.setTabIndex);

	const favourites = useStore((state) => state.favourites);
	const watched = useStore((state) => state.watched);
	const wishlist = useStore((state) => state.wishlist);

	const handleTabChange = (event, newValue) => {
		setTabIndex(newValue);
	};

	const renderList = (list) => {
		return (
			<Box display='grid' alignItems='stretch' gridTemplateColumns='repeat(10, 1fr)' columnGap={2} rowGap={4}>
				{list.map((movie) => (
					<Box gridColumn={isMobile ? 'span 12' : 'span 2'} key={movie.imdbID}>
						<MovieCard movie={movie} />
					</Box>
				))}
			</Box>
		);
	};

	return (
		<Box color='text.primary' bgcolor={darkMode ? '#272727' : 'background.default'} paddingY={2} minHeight='90vh'>
			<Container maxWidth='xl'>
				<Tabs value={tabIndex} onChange={handleTabChange} centered variant='fullWidth'>
					<Tab label='Favourites' />
					<Tab label='Watched' />
					<Tab label='Watch Later' />
				</Tabs>
				<Divider />
				<Box paddingY={4}>
					{tabIndex === 0 && (favourites.length === 0 ? <Box textAlign='center'>No Favourites Added.</Box> : renderList(favourites))}
					{tabIndex === 1 && (watched.length === 0 ? <Box textAlign='center'>No Movies Watched.</Box> : renderList(watched))}
					{tabIndex === 2 && (wishlist.length === 0 ? <Box textAlign='center'>No Movies To Watch Later</Box> : renderList(wishlist))}
				</Box>
			</Container>
		</Box>
	);
};

export default Home;