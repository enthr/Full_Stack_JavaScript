import { configureStore } from '@reduxjs/toolkit';

import themeReducer from '../features/theme/themeSlice';
import taskReducer from '../features/tasks/taskSlice';

const store = configureStore({
	reducer: {
		theme: themeReducer,
		tasks: taskReducer,
	},
});

export default store;