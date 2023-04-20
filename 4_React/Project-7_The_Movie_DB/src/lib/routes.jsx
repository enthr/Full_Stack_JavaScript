import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Error = lazy(() => import('../components/Error'));
const App = lazy(() => import('../App'));
const Home = lazy(() => import('../pages/Home'));
const Search = lazy(() => import('../pages/Search'));
const Movie = lazy(() => import('../pages/Movie'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
        errorElement: <Error />,
		children: [
			{
				index: true,
                element: <Home />
			},
            {
                path: 'search',
                element: <Search />
            },
            {
                path: 'movies/:id',
                element: <Movie />
            }
		]
	}
]);

export default router;