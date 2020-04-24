const treeData = [
  { title: 'dashboard', key: 'dashboard' },
  {
    title: 'form',
    key: 'form',
    children: [
      { title: 'form-base', key: 'form-base' },
      { title: 'form-step', key: 'form-step' },
    ],
  },
  {
    title: 'showview',
    key: 'showview',
    children: [
      { title: 'Collapse', key: 'Collapse' },
      { title: 'Table', key: 'Table' },
      { title: 'Tabs', key: 'Tabs' },
      { title: 'Tree', key: 'Tree' },
    ],
  },
  {
    title: 'registration',
    key: 'registration',
  },
  {
    title: 'news',
    key: 'news',
  },
  {
    title: 'recruits',
    key: 'recruits',
  },
  {
    title: 'textStorage',
    key: 'textStorage',
  },
  {
    title: 'manage',
    key: 'manage',
    children: [{ title: 'role-manage', key: 'role-manage' }],
  },
];
export default treeData;
