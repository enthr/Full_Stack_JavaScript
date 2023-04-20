import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
	const navigate = useNavigate();
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleLearnMore = () => {
		navigate(`/movies/${movie.imdbID}`);
	};

	return (
		<Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} raised={isHovered} sx={{ height: '100%' }}>
            <CardMedia component='img' height='60%' image={movie.Poster} title={movie.Title} />
            <CardContent sx={{ height: '30%' }}>
                <Typography variant='h5' component='h2' gutterBottom>
                    {movie.Title}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p' gutterBottom>
                    {movie.Year}
                </Typography>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom>
                    {movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}
                </Typography>
            </CardContent>
			<CardActions sx={{ height: '10%' }}>
				<Button size='contained' color='primary' onClick={handleLearnMore} fullWidth>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
};

export default MovieCard;
