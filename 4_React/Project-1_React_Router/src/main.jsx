import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './Pages/Root';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Loader from './Pages/Loader';

import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} fallbackElement={<Loader />} />
	</React.StrictMode>
);
