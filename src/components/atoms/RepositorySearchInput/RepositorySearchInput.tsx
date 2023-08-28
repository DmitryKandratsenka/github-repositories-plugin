import SearchIcon from '@mui/icons-material/Search';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './RepositorySearchInput.styles';
import { useTranslation } from '@/hooks/useTranslation';
import {
  selectApplicationState,
  setSearchValue,
} from '@/redux/slices/applicationSlice';
import { reset } from '@/redux/slices/githubRepositoriesSlice';

const MAX_LENGTH = 255;

export function RepositorySearchInput() {
  const dispatch = useDispatch();
  const { searchValue } = useSelector(selectApplicationState);

  const { t } = useTranslation();

  const handleChange = useCallback(
    (event) => {
      const newValue = event.target.value;

      if (MAX_LENGTH >= newValue.length) {
        dispatch(setSearchValue(event.target.value));
        dispatch(reset());
      }
    },
    [dispatch]
  );

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{ color: (theme) => theme.palette.primary.main }} />
      </SearchIconWrapper>
      <StyledInputBase
        value={searchValue}
        placeholder={t('search.for.a.repository')}
        onChange={handleChange}
      />
    </Search>
  );
}
