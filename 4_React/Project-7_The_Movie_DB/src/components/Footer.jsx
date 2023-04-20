import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import useStore from '../lib/store';

const Footer = () => {
	const darkMode = useStore((state) => state.darkMode);
	return (
		<footer>
			<Divider />
			<Box bgcolor={ (darkMode) ? '#272727' : 'background.default' } color='text.primary' paddingY={1}>
				<Typography variant='body2' align='center'>
					Made with ❤️ by{' '}
					<Link color='inherit' target='_blank' href='https://github.com/enthr'>
						Enthr
					</Link>
				</Typography>
			</Box>
		</footer>
	);
};

export default Footer;