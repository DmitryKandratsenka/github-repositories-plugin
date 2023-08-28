import { UseQueryOptions } from '@/hooks/api/useAxiosQueryClient';
import { useOctokitClient } from '@/hooks/api/useOctokitClient';
import {
  GithubApiResponse,
  GithubRepositoryModel,
} from '@/hooks/api/github/types';

const CACHE_TIME = 3000; // 3 sec
const PAGE_SIZE = 100;

export function useSearchRepositoriesQuery(
  searchValue: string,
  page: number,
  sort: string,
  order: 'asc' | 'desc' = 'asc',
  perPage: number = PAGE_SIZE,
  useQueryOptions?: UseQueryOptions<GithubApiResponse<GithubRepositoryModel>>
) {
  const queryParam = encodeURIComponent(`${searchValue} in:name`);

  return useOctokitClient<GithubApiResponse<GithubRepositoryModel>>(
    `GET /search/repositories?q=${queryParam}&page=${page}&sort=${sort}&order=${order}`,
    {
      ...useQueryOptions,
      cacheTime: CACHE_TIME,
      enabled: !!searchValue,
      staleTime: CACHE_TIME,
    },
    perPage
  );
}
