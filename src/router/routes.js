const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'points',
        component: () => import('src/layouts/MapLayout.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/PointsPage.vue'),
            meta: { title: 'Puntos de interés' },
          },
          {
            path: ':id',
            component: () => import('pages/PointsDetailsPage.vue'),
            meta: { title: 'Detalles del punto de interés' },
          },
        ],
      },
      {
        path: 'routes',
        component: () => import('src/layouts/MapLayout.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/RoutesPage.vue'),
            meta: { title: 'Rutas representativas' },
          },
          {
            path: ':id',
            component: () => import('pages/RouteDetailsPage.vue'),
            meta: { title: 'Detalles de la ruta' },
          },
        ],
      },
      {
        path: 'about',
        meta: { title: 'Sobre nosotros' },
        component: () => import('pages/AboutUsPage.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
