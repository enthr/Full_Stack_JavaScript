import { lazy } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';

import { queryClient } from '@lib/queryClient';
const Header = lazy(() => import('@layouts/Header'));
const Footer = lazy(() => import('@layouts/Footer'));
const Loading = lazy(() => import('@layouts/Loading'));
import { listAllQuery } from '@pages/ListAll/listAllLoader';
import { getMealQuery } from '@pages/Meal/mealLoader';
import { getInfoQuery } from '@pages/Home/homeLoader';

const App = () => {
	queryClient.prefetchQuery(listAllQuery());
	queryClient.prefetchQuery(getInfoQuery());
	const listAll = useQuery(listAllQuery());

	if(listAll.isSuccess) listAll.data.map(({ meals }) => meals.map(({ idMeal }) => queryClient.prefetchQuery(getMealQuery(idMeal))));

	return (
		<div className='w-screen bg-white text-black dark:text-white dark:bg-black relative'>
			{(listAll.isLoading) ? <Loading /> : <></>}
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default App;