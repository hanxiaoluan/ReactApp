const menu = [
  {
    key: '/dashboard',
    icon: 'dashboard',
    title: 'dashboard',
    auth: ['admin', 'guest'],
  },
  {
    key: '/form',
    icon: 'form',
    title: 'form',
    auth: ['admin'],
    subs: [
      {
        key: '/form/form-base',
        icon: '',
        title: 'form-base',
        auth: ['admin'],
      },
      {
        key: '/form/form-step',
        icon: '',
        title: 'form-step',
        auth: ['admin'],
      },
    ],
  },
  {
    key: '/showview',
    icon: 'pie-chart',
    title: 'showview',
    auth: ['admin', 'guest'],
    subs: [
      {
        key: '/showview/collapse',
        icon: '',
        title: 'Collapse',
        auth: ['admin'],
      },
      {
        key: '/showview/table',
        icon: '',
        title: 'Table',
        auth: ['guest', 'admin'],
      },
      {
        key: '/showview/tabs',
        icon: '',
        title: 'Tabs',
        auth: ['admin'],
      },
      {
        key: '/showview/tree',
        icon: '',
        title: 'Tree',
        auth: ['admin'],
      },
    ],
  },
  {
    key: '/registration',
    icon: 'snippets',
    title: 'registration',
    auth: ['admin'],
  },
  {
    key: '/news',
    icon: 'file-add',
    title: 'news',
    auth: ['admin'],
  },
  {
    key: '/recruit',
    icon: 'solution',
    title: 'recruits',
    auth: ['admin'],
  },
  {
    key: '/manage',
    icon: 'lock',
    title: 'manage',
    auth: ['admin'],
  },
  {
    key: '/textStorage',
    icon: 'ordered-list',
    title: 'textStorage',
    auth: ['admin', 'guest'],
  },
  {
    key: '/reddit',
    icon: 'reddit',
    title: 'reddit',
    auth: ['admin', 'guest'],
  },
];
export default menu;
