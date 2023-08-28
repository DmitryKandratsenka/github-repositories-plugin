import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/redux';
import { FilterOptionValue } from '@/components/molecules';

interface AppState {
  searchValue: string;
  selectedFilter: FilterOptionValue;
}

const initialState: AppState = {
  searchValue: 'dmitrykandratsenka',
  selectedFilter: 'all',
};

export const applicationSlice = createSlice({
  initialState,
  name: 'application',
  reducers: {
    clearSearchValue: (appState) => {
      return { ...appState, searchValue: '' };
    },
    setSearchValue: (appState, { payload }: PayloadAction<string>) => {
      return { ...appState, searchValue: payload };
    },
    setSelectedFilter: (
      appState,
      { payload }: PayloadAction<FilterOptionValue>
    ) => {
      return { ...appState, selectedFilter: payload };
    },
  },
});

export const selectApplicationState = (state: RootState): AppState =>
  state.application;

export const { setSelectedFilter, setSearchValue, clearSearchValue } =
  applicationSlice.actions;

export default applicationSlice.reducer;
