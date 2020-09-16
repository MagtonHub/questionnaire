const { uniq } = require('lodash');
const RouterConfig = require('../../config/config').default.routes;

const BASE_URL = `http://localhost:${process.env.PORT || 8000}`;

function formatter(routes, parentPath = '') {
  const fixedParentPath = parentPath.replace(/\/{1,}/g, '/');
  let result = [];
  routes.forEach((item) => {
    if (item.path) {
      result.push(`${fixedParentPath}/${item.path}`.replace(/\/{1,}/g, '/'));
    }
    if (item.routes) {
      result = result.concat(
        formatter(item.routes, item.path ? `${fixedParentPath}/${item.path}` : parentPath),
      );
    }
  });
  return uniq(result.filter((item) => !!item));
}

beforeEach(async () => {
  await page.goto(`${BASE_URL}`);
  await page.evaluate(() => {
    localStorage.clear();
  });
});

describe('CLARK test', () => {
  const testPage = (path) => async () => {
    await page.goto(`${BASE_URL}${path}`);
    await page.waitForSelector('Header', {
      timeout: 2000,
    });
    const haveHeader = await page.evaluate(
      () => document.getElementsByTagName('Header').length > 0,
    );
    expect(haveHeader).toBeTruthy();
  };

  const routers = formatter(RouterConfig);
  routers.forEach((route) => {
    it(`test pages ${route}`, testPage(route));
  });
});
