// https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  dva: {
    hmr: true,
  },
  locale: false,
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      component: '../layouts/MainLayout',
      routes: [
        {
          path: '/:id',
          component: './Questionnaire',
        },
        {
          exact: true,
          component: './401',
        },
      ],
    },
  ],
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  manifest: {
    basePath: '/',
  },
});
