import loadable from "@/utils/loadable.jsx";
const Dashboard = loadable(() => import("@/views/Dashboard/Index.jsx"));
const FormBaseView = loadable(() =>
  import("@/views/FormView/FormBaseView/Index.jsx")
);
const FormStepView = loadable(() =>
  import("@/views/FormView/FormStepView/Index.jsx")
);
const Collapse = loadable(() => import("@/views/ShowView/Collapse/Index.jsx"));
const Table = loadable(() => import("@/views/ShowView/Table/Index.jsx"));
const Tabs = loadable(() => import("@/views/ShowView/Tabs/Index.jsx"));
const Tree = loadable(() => import("@/views/ShowView/Tree/Index.jsx"));
const TextStorage = loadable(() => import("@/views/textStorage/index.jsx"));
const Reddit = loadable(() => import("@/views/reddit/containers/Reddit.js"));
const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/form/form-base",
    name: "FormBaseView",
    component: FormBaseView
  },
  {
    path: "/form/form-step",
    name: "FormStepView",
    component: FormStepView
  },
  {
    path: "/showview/collapse",
    name: "Collapse",
    component: Collapse
  },
  {
    path: "/showview/table",
    name: "Table",
    component: Table
  },
  {
    path: "/showview/tabs",
    name: "Tabs",
    component: Tabs
  },
  {
    path: "/showview/tree",
    name: "Tree",
    component: Tree
  },
  {
    path: "/textstorage",
    name: "textStorage",
    component: TextStorage
  },
  {
    path: "/reddit",
    name: "reddit",
    component: Reddit
  }
];
export default routes;
