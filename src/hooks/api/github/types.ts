export interface GithubRepositoryModel {
  full_name: string;
  html_url: string;
  id: string;
  name: string;
}

export interface GithubRepositoryModelUi extends GithubRepositoryModel {
  rating: number | null;
}

export interface GithubApiResponse<T> {
  incomplete_results: boolean;
  items: T[];
  total_count: number;
}
