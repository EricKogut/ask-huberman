import { Routes, init } from '@nx/next-router';

// 'user': { // This is the route name
//   pattern: '/user', // This is the url pattern to call the page
//   page: '/user', // This is the next page (pages/user.js or pages/user/index.js)
// },

const routes: Routes = {
  user: {
    pattern: '/chatwithhuberman',
    page: '/ChatWithHuberman',
  },
  home: {
    pattern: '/',
    page: '/index',
  },
};

init(routes);
