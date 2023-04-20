import { lazy } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';

import useStore from '../lib/store';
import { useMovies } from '../lib/api';
const MovieCard = lazy(() => import('../components/MovieCard'));

const Search = () => {
	const darkMode = useStore((state) => state.darkMode);
	const isMobile = useMediaQuery('(max-width: 768px)');

	const searchTerm = useStore((state) => state.searchTerm);
	const setSearchTerm = useStore((state) => state.setSearchTerm);
	
	const year = useStore((state) => state.year);
	const setYear = useStore((state) => state.setYear);

	const type = useStore((state) => state.type);
	const setType = useStore((state) => state.setType);

	const pageNumber = useStore((state) => state.pageNumber);
	const setPageNumber = useStore((state) => state.setPageNumber);

	const pageSize = useStore((state) => state.pageSize);

	const { movies, totalResults, isLoading, isError } = useMovies(searchTerm, year, type, pageNumber);

	if (isError) {
		return <Typography>Error fetching movie data</Typography>;
	}

	return (
		<Box color='text.primary' bgcolor={darkMode ? '#272727' : 'background.default'} paddingY={4}>
			<Container maxWidth='xl'>
				<Stack direction={isMobile ? 'column' : 'row'} spacing={2} justifyContent='center' alignItems='center'>
						<TextField
							label='Search Term'
							variant='outlined'
							margin='none'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							fullWidth
						/>
						<TextField
							label='Year'
							variant='outlined'
							margin='none'
							value={year}
							onChange={(e) => setYear(e.target.value)}
							fullWidth
						/>
						<TextField
							label='Select Type'
							variant='outlined'
							margin='none'
							select
							defaultValue={''}
							value={type}
							onChange={(e) => setType(e.target.value)}
							fullWidth
						>
							<MenuItem value=''>All</MenuItem>
							<MenuItem value='movie'>Movie</MenuItem>
							<MenuItem value='series'>Series</MenuItem>
							<MenuItem value='episode'>Episode</MenuItem>
							<MenuItem value='game'>Game</MenuItem>
						</TextField>
					
				</Stack>
				{isLoading ? (
					<Box minHeight='75vh' display='flex' justifyContent='center' alignItems='center' marginY={4}>
						<Typography variant='h3' color='grey' align='center'>
							Loading...
						</Typography>
					</Box>
				) : movies && movies.length > 0 ? (
					<Box minHeight='75vh' marginY={4}>
						<Box display='grid' alignItems='stretch' gridTemplateColumns='repeat(10, 1fr)' columnGap={2} rowGap={4}>
							{movies.map((movie) => (
								<Box gridColumn={isMobile ? 'span 12' : 'span 2'} key={movie.imdbID}>
									<MovieCard movie={movie} />
								</Box>
							))}
						</Box>
						<Stack marginTop={8} direction='row' justifyContent='center'>
							<Pagination
								count={Math.ceil(totalResults / pageSize)}
								page={pageNumber}
								onChange={(_, value) => setPageNumber(value)}
								color='primary'
								size='large'
							/>
						</Stack>
					</Box>
				) : (
					<Box minHeight='75vh' display='flex' justifyContent='center' alignItems='center' marginY={4}>
						<Typography variant='h3' color='grey' align='center'>
							No Results To Show.
						</Typography>
					</Box>
				)}
			</Container>
		</Box>
	);
};

export default Search;
