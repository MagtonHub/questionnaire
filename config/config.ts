// https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  dva: {
    hmr: true,
  },
  locale: {
    default: 'en-US',
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
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
          path: '/',
          component: './Questionnaire',
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
