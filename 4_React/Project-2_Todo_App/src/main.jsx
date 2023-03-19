import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './lib/store';
import routes from './routes';
import PacmanSpinnerLoad from './components/PacmanSpinnerLoad';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={routes} fallbackElement={<PacmanSpinnerLoad />} />
		</Provider>
	</React.StrictMode>
);