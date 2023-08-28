import {
  GithubApiResponse,
  GithubRepositoryModel,
} from '@/hooks/api/github/types';

export const repositoriesMock: GithubRepositoryModel[] = [
  {
    full_name: 'DmitryKandratsenka/github-repositories-plugin',
    html_url:
      'https://github.com/DmitryKandratsenka/github-repositories-plugin',
    id: '683006117',
    name: 'github-repositories-plugin',
  },
  {
    full_name: 'DmitryKandratsenka/find-your-country',
    html_url: 'https://github.com/DmitryKandratsenka/find-your-country',
    id: '586931777',
    name: 'find-your-country',
  },
  {
    full_name: 'microsoft/vscode',
    html_url: 'https://github.com/microsoft/vscode',
    id: '41881900',
    name: 'vscode',
  },
  {
    full_name: 'facebook/react',
    html_url: 'https://github.com/facebook/react',
    id: '10270250',
    name: 'react',
  },
  {
    full_name: 'facebook/react-native',
    html_url: 'https://github.com/facebook/react-native',
    id: '29028775',
    name: 'react-native',
  },
];

export function buildOctokitResponse(
  repos: GithubRepositoryModel[]
): GithubApiResponse<GithubRepositoryModel> {
  return {
    incomplete_results: false,
    items: repos,
    total_count: repos.length,
  };
}
