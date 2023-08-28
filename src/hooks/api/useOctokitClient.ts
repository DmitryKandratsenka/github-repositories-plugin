import type {
  UseQueryOptions as UseReactQueryOptions,
  UseQueryResult,
} from 'react-query';
import { Octokit } from 'octokit';
import { OctokitResponse } from '@octokit/types/dist-types/OctokitResponse';
import { useQuery } from '@/hooks/api/useQuery';

const octokit = new Octokit({
  auth: process.env.REPO_PAT,
});

const baseUrl = process.env.GITHUB_API_URL;
const gitHubApiVersion = process.env.GITHUB_API_VERSION;

export type UseQueryOptions<Data> = Omit<
  UseReactQueryOptions<Data>,
  'queryFn' | 'queryKey'
>;

export function useOctokitClient<Data>(
  endpoint: string,
  useQueryOptions?: UseQueryOptions<Data>,
  perPage?: number
): UseQueryResult<Data> {
  return useQuery<Data>(
    endpoint,
    async () => {
      const { data }: OctokitResponse<Data> = await octokit.request(endpoint, {
        baseUrl,
        headers: {
          'X-GitHub-Api-Version': gitHubApiVersion,
        },
        per_page: perPage,
      });

      return data;
    },
    useQueryOptions,
    { baseUrl }
  );
}
