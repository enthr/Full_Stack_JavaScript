import { PacmanLoader } from 'react-spinners';

function Loader() {
	return (
		<div className='flex justify-center items-center h-[100vh]'>
			<PacmanLoader size='5rem' color='#FFAB00' loading />
		</div>
	);
}

export default Loader;