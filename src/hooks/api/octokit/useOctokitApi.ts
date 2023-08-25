import type {
  UseQueryOptions as UseReactQueryOptions,
  UseQueryResult,
} from "react-query";
import { Octokit } from "octokit";
import { OctokitResponse } from "@octokit/types/dist-types/OctokitResponse";
import { RequestInterface } from "@octokit/types/dist-types/RequestInterface";
import { useQuery } from "@/hooks/api/useQuery";

const octokit = new Octokit({
  auth: process.env.REPO_PAT,
});

const baseUrl = process.env.GITHUB_API_URL;
const gitHubApiVersion = process.env.GITHUB_API_VERSION;

export type UseQueryOptions<Data> = Omit<
  UseReactQueryOptions<Data>,
  "queryFn" | "queryKey"
>;

export function useOctokitApi<Data>(
  url: string,
  requestConfig: RequestInterface,
  useQueryOptions?: UseQueryOptions<Data>
): UseQueryResult<Data> {
  return useQuery<Data>(
    url,
    async () => {
      const { data }: OctokitResponse<Data> = await octokit.request(url, {
        baseUrl,
        headers: {
          "X-GitHub-Api-Version": gitHubApiVersion,
        },
      });

      return data;
    },
    useQueryOptions,
    { baseUrl }
  );
}
