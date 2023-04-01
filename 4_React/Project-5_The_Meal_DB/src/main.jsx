import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import { Router } from '@lib/Router';
import { queryClient } from '@lib/queryClient';
const Loading = lazy(() => import('@layouts/Loading'));
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Suspense fallback={<Loading />} >
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={Router}  />
			</QueryClientProvider>
		</Suspense>
	</React.StrictMode>
);