import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';

import useStore from '../lib/store';
import { useMovie } from '../lib/api';

const Movie = () => {
	const darkMode = useStore((state) => state.darkMode);
	const isMobile = useMediaQuery('(max-width: 768px)');

	const favourites = useStore((state) => state.favourites);
	const setFavourites = useStore((state) => state.setFavourites);

	const watched = useStore((state) => state.watched);
	const setWatched = useStore((state) => state.setWatched);

	const wishlist = useStore((state) => state.wishlist);
	const setWishlist = useStore((state) => state.setWishlist);

	const { id } = useParams();
	const { movie, isError, isLoading } = useMovie(id);

	if (isError) {
		return <Typography>Error fetching movie data</Typography>;
	}

	const handleFavourite = () => {
		if (favourites.includes(movie)) {
			setFavourites(favorites.filter((fav) => fav !== movie));
		} else {
			setFavourites([...favourites, movie]);
		}
	};

	const handleWatched = () => {
		if (watched.includes(movie)) {
			setWatched(watched.filter((watch) => watch !== movie));
		} else {
			setWatched([...watched, movie]);
		}
	};

	const handleWishlist = () => {
		if (wishlist.includes(movie)) {
			setWishlist(wishlist.filter((wish) => wish !== movie));
		} else {
			setWishlist([...wishlist, movie]);
		}
	};

	return (
		<Box color='text.primary' bgcolor={darkMode ? '#272727' : 'background.default'} paddingY={2}>
			<Container maxWidth='xl'>
				{isLoading ? (
					<Box minHeight='90vh' display='flex' justifyContent='center' alignItems='center' marginY={4}>
						<Typography variant='h3' color='grey' align='center'>
							Loading...
						</Typography>
					</Box>
				) : (
					<Stack
						direction={isMobile ? 'column' : 'row'}
						minHeight='86vh'
						justifyContent='space-around'
						alignItems='center'
						spacing={4}
					>
						<Stack width={isMobile ? '100%' : '35%'}>
							<img src={movie.Poster} alt={movie.Title} />
						</Stack>
						<Stack direction='column' width={isMobile ? '100%' : '50%'} spacing={2} justifyContent='flex-start'>
							<Typography variant='h2' fontWeight='500'>
								{movie.Title} - ({movie.Year})
							</Typography>
							<Typography variant='subtitle1' gutterBottom>
								{movie.Genre} | {movie.Rated} | {movie.Runtime}
							</Typography>
							<Typography variant='body1' gutterBottom>
								- Director: {movie.Director}
							</Typography>
							<Typography variant='body1' gutterBottom>
								- Writer: {movie.Writer}
							</Typography>
							<Typography variant='body1' gutterBottom>
								- Actors: {movie.Actors}
							</Typography>
							<Typography variant='body1' gutterBottom>
								- Plot: {movie.Plot}
							</Typography>
							<Typography variant='body1' gutterBottom>
								- Language: {movie.Language}
							</Typography>
							<Typography variant='body1' gutterBottom>
								- Country: {movie.Country}
							</Typography>
							<Typography variant='body1' gutterBottom>
								- Awards: {movie.Awards}
							</Typography>
							{movie.Ratings.map((rating) => (
								<Typography key={rating.Source} variant='body1' gutterBottom>
									- {rating.Source}: {rating.Value}
								</Typography>
							))}
							<Typography variant='body1' gutterBottom>
								- IMDb Rating: {movie.imdbRating} ({movie.imdbVotes} votes)
							</Typography>
							{movie.Type === 'series' && (
								<Typography variant='body1' gutterBottom>
									- Total Seasons: {movie.totalSeasons}
								</Typography>
							)}
							<Stack direction='row'>
								<Tooltip title='Favourite'>
									<IconButton onClick={handleFavourite} size='large'>
										{favourites.includes(movie) ? <FavoriteIcon color='error' /> : <FavoriteBorderIcon />}
									</IconButton>
								</Tooltip>
								<Tooltip title='Watched'>
									<IconButton onClick={handleWatched} size='large'>
										{watched.includes(movie) ? (
											<CheckBoxIcon color='primary' />
										) : (
											<CheckBoxOutlineBlankIcon />
										)}
									</IconButton>
								</Tooltip>
								<Tooltip title='Watch Later'>
									<IconButton onClick={handleWishlist} size='large'>
										{wishlist.includes(movie) ? <BookmarkRemoveIcon color='warning' /> : <BookmarkAddIcon />}
									</IconButton>
								</Tooltip>
							</Stack>
						</Stack>
					</Stack>
				)}
			</Container>
		</Box>
	);
};

export default Movie;