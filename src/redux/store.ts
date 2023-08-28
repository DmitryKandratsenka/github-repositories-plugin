import { configureStore } from '@reduxjs/toolkit';
import favouriteRepositoriesReducer from '@/redux/slices/favouriteRepositoriesSlice';
import applicationReducer from '@/redux/slices/applicationSlice';
import githubRepositoriesReducer from '@/redux/slices/githubRepositoriesSlice';

// @ts-ignore
export const store = configureStore({
  reducer: {
    application: applicationReducer,
    favouriteRepositories: favouriteRepositoriesReducer,
    githubRepositories: githubRepositoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
