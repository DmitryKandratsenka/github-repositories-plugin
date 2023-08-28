import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { useMemo } from 'react';
import { selectFavouriteRepositories } from '@/redux';
import { GithubRepoCard } from '@/components/molecules/GithubRepoCard';
import { selectApplicationState } from '@/redux/slices/applicationSlice';
import { EmptyRepositoriesCard } from '@/components/molecules/EmptyRepositoriesCard';

export function FavouriteRepositoryList() {
  const { searchValue } = useSelector(selectApplicationState);

  const repositories = useSelector(selectFavouriteRepositories);

  const filteredRepos = useMemo(
    () =>
      repositories?.filter((repo) =>
        repo.full_name.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [searchValue, repositories]
  );

  if (!filteredRepos?.length) {
    return <EmptyRepositoriesCard />;
  }

  return (
    <Box display="flex" flexDirection="column">
      {filteredRepos.map((repo) => (
        <GithubRepoCard repo={repo} key={repo.id} />
      ))}
    </Box>
  );
}
