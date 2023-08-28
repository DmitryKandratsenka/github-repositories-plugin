import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, FilterOptionValue, Option } from '@/components/molecules';
import { useTranslation } from '@/hooks/useTranslation';
import {
  clearSearchValue,
  selectApplicationState,
  setSelectedFilter,
} from '@/redux/slices/applicationSlice';
import { reset } from '@/redux/slices/githubRepositoriesSlice';

export function FilterDropdown() {
  const { t } = useTranslation();
  const { selectedFilter } = useSelector(selectApplicationState);
  const dispatch = useDispatch();

  const options = useMemo(
    () =>
      [
        { label: t('all'), value: 'all' },
        { label: t('my.favourites'), value: 'favourites' },
      ] as Option<FilterOptionValue>[],
    [t]
  );

  const handleChange = useCallback(
    (newOption) => {
      dispatch(setSelectedFilter(newOption.value));
      dispatch(reset());
      dispatch(clearSearchValue());
    },
    [dispatch]
  );

  const selectedOption = options.find(
    (option) => option.value === selectedFilter
  );

  return (
    <Dropdown
      placeholder={t('filter')}
      selectedOption={selectedOption}
      options={options}
      onChange={handleChange}
    />
  );
}
