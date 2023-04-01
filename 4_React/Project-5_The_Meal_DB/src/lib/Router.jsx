import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { queryClient } from './queryClient';
const App = lazy(() => import('@/App'));
const Error = lazy(() => import('@pages/Error/Error'));
const Home = lazy(() => import('@pages/Home/Home'));
import { homeLoader } from '@pages/Home/homeLoader';

const ListAll = lazy(() => import('@pages/ListAll/ListAll'));
import { listAllLoader } from '@pages/ListAll/listAllLoader';

const Random = lazy(() => import('@pages/Random/Random'));
import { randomLoader } from '@pages/Random/randomLoader';

const Meal = lazy(() => import('@pages/Meal/Meal'));
import { mealLoader } from '@pages/Meal/mealLoader';

export const Router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />,
				loader: async() => homeLoader(queryClient)
			},
			{
				path: 'listall',
				element: <ListAll />,
				loader: async() => listAllLoader(queryClient)
			},
			{
				path: 'random',
				element: <Random />,
				loader: async() => randomLoader(queryClient)
			},
			{
				path: 'meal/:id',
				element: <Meal />,
				loader: async() => mealLoader(queryClient)
			}
		]
	}
]);