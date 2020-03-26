import loadable from '@/utils/loadable.jsx';
const Dashboard = loadable(() => import('@/views/dashboard/Index.jsx'));
const FormBaseView = loadable(() =>
  import('@/views/formview/FormBaseView/Index.jsx'),
);
const FormStepView = loadable(() =>
  import('@/views/formview/FormStepView/Index.jsx'),
);
const Collapse = loadable(() => import('@/views/showview/Collapse/Index.jsx'));
const Table = loadable(() => import('@/views/showview/Table/Index.jsx'));
const Tabs = loadable(() => import('@/views/showview/Tabs/Index.jsx'));
const Tree = loadable(() => import('@/views/showview/Tree/Index.jsx'));
const TextStorage = loadable(() => import('@/views/textStorage/index.jsx'));
const Reddit = loadable(() => import('@/views/reddit/containers/Reddit.js'));
const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    auth: ['admin', 'guest'],
    icon: 'dashboard',
  },
  {
    path: '/form/form-base',
    name: 'FormBaseView',
    component: FormBaseView,
    auth: ['admin'],
  },
  {
    path: '/form/form-step',
    name: 'FormStepView',
    component: FormStepView,
    auth: ['admin'],
  },
  {
    path: '/showview/collapse',
    name: 'Collapse',
    component: Collapse,
    auth: ['admin'],
  },
  {
    path: '/showview/table',
    name: 'Table',
    component: Table,
    auth: ['admin'],
  },
  {
    path: '/showview/tabs',
    name: 'Tabs',
    component: Tabs,
    auth: ['admin'],
  },
  {
    path: '/showview/tree',
    name: 'Tree',
    component: Tree,
    auth: ['admin'],
  },
  {
    path: '/textstorage',
    name: 'textStorage',
    auth: ['admin', 'guest'],
    component: TextStorage,
  },
  {
    path: '/reddit',
    name: 'reddit',
    auth: ['admin', 'guest'],
    component: Reddit,
  },
];
export default routes;
