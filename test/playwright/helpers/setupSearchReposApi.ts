import { Page } from 'playwright';
import {
  buildOctokitResponse,
  repositoriesMock,
} from 'test/playwright/mocks/repositoriesMock';

export function setupSearchReposApi(page: Page, queryParameter: string) {
  const regExp = new RegExp(
    `^(.*)\\/search\\/repositories\\?q=${queryParameter}(.*)$`
  );

  return page.route(regExp, (route) => {
    return route.fulfill({
      body: JSON.stringify(
        buildOctokitResponse(
          repositoriesMock.filter((repo) =>
            repo.full_name.toLowerCase().includes(queryParameter.toLowerCase())
          )
        )
      ),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      status: 200,
    });
  });
}
