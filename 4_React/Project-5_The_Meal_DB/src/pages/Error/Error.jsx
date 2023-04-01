import { lazy } from 'react';
import { useRouteError } from 'react-router-dom';

const MoonLoader = lazy(() => import('react-spinners/MoonLoader'));

const Error = () => {
	const error = useRouteError();

	return (
		<div className='h-[90vh] flex flex-col justify-center items-center gap-8'>
			<MoonLoader color='#FFAB00' loading size={100} />
			<h1 className='text-5xl font-medium'>Oops! Something went wrong.</h1>
			<h6 className='text-3xl font-semibold'>Status Code: {error.status || 'Unknown'}</h6>
			<p className='text-xl font-bold'>Status Message: {error.statusText || 'Unknown'}</p>
			<p className='text-xl font-bold'>Contact Website Owner.</p>
		</div>
	);
};

export default Error;