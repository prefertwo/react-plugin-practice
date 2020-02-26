export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/board'
      },
      {
        path: '/board',
        name: 'board',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/draggable',
        name: 'draggable',
        icon: 'smile',
        routes: [
          {
            path: '/draggable/basic',
            name: 'basic',
            component: './Draggable/Basic',
          }
        ]
      },
      {
        path: '/product',
        name: 'product',
        icon: 'edit',
        routes: [
          {
            path: '/product/list',
            name: 'list',
            icon: 'smile',
            component: './Welcome'
          }
        ]
      },
      {
        path: '/transaction',
        name: 'transaction',
        icon: '',
        routes: []
      },
      {
        path: '/fofFound',
        name: 'fofFound',
        icon: '',
        routes: []
      },
      {
        path: '/company',
        name: 'company',
        icon: '',
        routes: []
      },
      {
        path: '/account',
        name: 'account',
        icon: '',
        routes: []
      }
    ]
  }
]
/* [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/',
            redirect: '/welcome',
          },
          {
            path: '/welcome',
            name: 'welcome',
            icon: 'smile',
            component: './Welcome',
          },
          {
            path: '/admin',
            name: 'admin',
            icon: 'crown',
            component: './Admin',
            authority: ['admin'],
          },
          {
            component: './404',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
]; */
