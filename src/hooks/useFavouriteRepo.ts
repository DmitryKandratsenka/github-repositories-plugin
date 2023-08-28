import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import {
  GithubRepositoryModel,
  GithubRepositoryModelUi,
} from '@/hooks/api/github/types';
import { selectFavouriteRepositories } from '@/redux';

export function useFavouriteRepo(
  repo: GithubRepositoryModel
): GithubRepositoryModelUi | undefined {
  const favouriteRepos = useSelector(selectFavouriteRepositories);

  return useMemo(
    () => favouriteRepos.find((favouriteRepo) => favouriteRepo.id === repo.id),
    [favouriteRepos, repo]
  );
}
