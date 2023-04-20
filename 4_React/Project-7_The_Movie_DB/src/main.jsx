import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import routes from './lib/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider router={routes} />
		</Suspense>
	</React.StrictMode>
);