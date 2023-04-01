import { lazy } from 'react';
const MoonLoader = lazy(() => import('react-spinners/MoonLoader'));

const Loading = () => {
	return (
		<div className={`absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`} >
			<MoonLoader color='#FFAB00' loading={true} size={100} />
			<p className='text-2xl font-medium text-center mt-6'>Loading...</p>
		</div>
	);
};

export default Loading;
