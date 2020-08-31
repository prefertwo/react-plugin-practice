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
        component: './XingZheng/Manager/Board',
      },
      {
        path: '/account',
        name: 'crypto',
        icon: 'smile',
        component: './XingZheng/Manager/Account',
      },
      {
        path: '/welcome',
        component: './Welcome'
      },
      {
        component: './404',
      },
    ]
  },
  {
    component: './404',
  },
]



/* export default [
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
        path: '/chart',
        name: 'chart',
        icon: 'smile',
        component: './AntdDemo/Charts'
        // routes: [
        //   {
        //     path: '/draggable/basic',
        //     name: 'basic',
        //     component: './Draggable/Basic',
        //   }
        // ]
      },
      {
        path: '/antd',
        name: 'antd',
        icon: 'smile',
        // component: './AntdDemo'
        routes: [
          {
            path: '/antd/dynamicform',
            name: 'dynamicform',
            component: './AntdDemo/Form'
          },
          {
            path: '/antd/table',
            name: 'table',
            component: './AntdDemo/Table'
          },
          {
            path: '/antd/steps',
            name: 'step',
            component: './AntdDemo/Step'
          }
        ]
      },
      {
        path: '/handsontable',
        name: 'handsontable',
        icon: 'smile',
        component: './HandsonTable/index'
        // routes: [
        //   {
        //     path: '/draggable/basic',
        //     name: 'basic',
        //     component: './Draggable/Basic',
        //   }
        // ]

      }
    ]
  },
  {
    component: './404',
  },
] */
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
