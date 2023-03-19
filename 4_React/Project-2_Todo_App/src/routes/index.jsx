import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

const Home = lazy(() => import('../pages/Home'));
const Error = lazy(() => import('../pages/Error'));


const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />
			}
		]
	}
]);

export default router;
