import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/redux';
import {
  GithubRepositoryModel,
  GithubRepositoryModelUi,
} from '@/hooks/api/github/types';
import { convertToGithubRepoModelUi } from '@/converters/convertToGithubRepoModelUi';

const initialState: GithubRepositoryModelUi[] = [];

export const favouriteRepositoriesSlice = createSlice({
  initialState,
  name: 'favouriteRepositories',
  reducers: {
    addFavourite: (
      repositories,
      { payload }: PayloadAction<GithubRepositoryModel>
    ) => {
      return [...repositories, convertToGithubRepoModelUi(payload)];
    },
    removeFavourite: (
      repositories,
      { payload }: PayloadAction<GithubRepositoryModelUi>
    ) => {
      return repositories.filter((repository) => repository.id !== payload.id);
    },
    updateFavourite: (
      repositories,
      { payload }: PayloadAction<GithubRepositoryModelUi>
    ) => {
      return repositories.map((repo) => {
        if (repo.id === payload.id) {
          return payload;
        }

        return repo;
      });
    },
  },
});

export const selectFavouriteRepositories = (state: RootState) =>
  state.favouriteRepositories;

export const { addFavourite, removeFavourite, updateFavourite } =
  favouriteRepositoriesSlice.actions;

export default favouriteRepositoriesSlice.reducer;
