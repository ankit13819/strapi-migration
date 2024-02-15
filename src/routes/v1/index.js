

const express = require('express');
const cms = require('./cms.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: cms
  }
];



defaultRoutes.forEach((route) => {
  if(route.middleware)
    router.use(route.path, route.middleware, route.route);
  else
    router.use(route.path, route.route);
});

module.exports = router;
