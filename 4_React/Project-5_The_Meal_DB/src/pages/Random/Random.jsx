import { lazy } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';

const Loading = lazy(() => import('@layouts/Loading'));
import { getRandomMealQuery } from '@pages/Random/randomLoader';

const Random = () => {
	const { isSuccess, isError, isLoading, data } = useQuery(getRandomMealQuery());

	if (isError) {
		throw new Error('', { status: 404, statusText: 'Not Found' });
	}

	return (
		<section className='w-full'>
			{isLoading ? <div className='h-[85vh] md:[90vh]'><Loading /></div> : <></>}
			{isSuccess ? <Navigate replace={true} to={`/meal/${data.idMeal}`} /> : <></>}
		</section>
	);
};

export default Random;