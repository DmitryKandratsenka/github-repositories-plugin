import { memo, useCallback, useEffect } from 'react';
import { GridProps } from '@mui/material/Grid/Grid';
import { Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, InfiniteScroll } from '@/components/atoms';
import { useSearchRepositoriesQuery } from '@/hooks/api/github/useSearchRepositoriesQuery';
import useDebounce from '@/hooks/useDebounce';
import { selectApplicationState } from '@/redux/slices/applicationSlice';
import {
  addChunk,
  incrementPage,
  selectAllRepositories,
} from '@/redux/slices/githubRepositoriesSlice';
import { GithubRepoCard } from '@/components/molecules/GithubRepoCard';
import { EmptyRepositoriesCard } from '@/components/molecules/EmptyRepositoriesCard';

export function GridContainer(props: GridProps) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: 'space-evenly',
        marginLeft: 0,
        marginTop: (theme) => theme.spacing(3),
      }}
      {...props}
    />
  );
}

export function GridItem(props: GridProps) {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={3}
      lg={3}
      sx={{ display: 'flex', justifyContent: 'center' }}
      {...props}
    />
  );
}

const PAGE_SIZE = 50;
const SEARCH_DEBOUNCE_TIME = 1000;

function RepositoriesList() {
  const dispatch = useDispatch();
  const { searchValue } = useSelector(selectApplicationState);
  const { debouncedValue: debouncedSearch, timer } = useDebounce(
    searchValue,
    SEARCH_DEBOUNCE_TIME
  );
  const { currentPage, repositories } = useSelector(selectAllRepositories);
  const { data, isLoading } = useSearchRepositoriesQuery(
    debouncedSearch,
    currentPage,
    'stars',
    'desc',
    PAGE_SIZE
  );

  useEffect(() => {
    dispatch(addChunk(data?.items));
  }, [data, dispatch]);

  const handleFetchData = useCallback(() => {
    dispatch(incrementPage());
  }, [dispatch]);

  const hasMore = currentPage * PAGE_SIZE < (data?.total_count || 0);

  if (timer || (isLoading && currentPage === 1)) {
    return <CircularProgress />;
  }

  if (!repositories?.length && !hasMore) {
    return <EmptyRepositoriesCard />;
  }

  return (
    <InfiniteScroll
      length={repositories.length}
      hasMore={isLoading || hasMore}
      items={
        <Box display="flex" flexDirection="column">
          {repositories.map((repo) => (
            <GithubRepoCard repo={repo} key={repo.id} />
          ))}
        </Box>
      }
      fetchData={handleFetchData}
    />
  );
}

export default memo(RepositoriesList);
