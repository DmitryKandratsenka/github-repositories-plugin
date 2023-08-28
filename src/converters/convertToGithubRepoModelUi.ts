import {
  GithubRepositoryModel,
  GithubRepositoryModelUi,
} from '@/hooks/api/github/types';

export function convertToGithubRepoModelUi(
  repo: GithubRepositoryModel
): GithubRepositoryModelUi {
  return { ...repo, rating: null };
}
