import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/redux';
import { GithubRepositoryModel } from '@/hooks/api/github/types';

interface State {
  currentPage: number;
  lastStoredChunkPage: number;
  repositories: GithubRepositoryModel[];
}

const initialState: State = {
  currentPage: 1,
  lastStoredChunkPage: 0,
  repositories: [],
};

export const githubRepositoriesSlice = createSlice({
  initialState,
  name: 'githubRepositoriesSlice',
  reducers: {
    addChunk: (
      state,
      { payload }: PayloadAction<GithubRepositoryModel[] | undefined>
    ) => {
      if (state.lastStoredChunkPage === state.currentPage || !payload) {
        return state;
      }

      return {
        ...state,
        lastStoredChunkPage: state.lastStoredChunkPage + 1,
        repositories: [...state.repositories, ...payload].filter(
          (repo, index, self) => {
            return self.findIndex((item) => item.id === repo.id) === index;
          }
        ),
      };
    },
    incrementPage: (state) => ({
      ...state,
      currentPage: state.currentPage + 1,
    }),
    reset: () => {
      return initialState;
    },
    setCurrentPage: (state, { payload }: PayloadAction<number>) => {
      return { ...state, currentPage: payload };
    },
  },
});

export const selectAllRepositories = (state: RootState) =>
  state.githubRepositories;

export const { reset, setCurrentPage, incrementPage, addChunk } =
  githubRepositoriesSlice.actions;

export default githubRepositoriesSlice.reducer;
