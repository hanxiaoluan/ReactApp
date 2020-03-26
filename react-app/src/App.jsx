import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import loadable from './utils/loadable';
import './App.css';
import '@/styles/base.scss';
const Layout = loadable(() => import('./layout/Layout.jsx'));
const Login = loadable(() => import('@/views/login/Index'));
function App() {
  return (
    <Router>
      <Switch>
        {/*   <Route path="/" exact render={() => <Redirect to="/login" />}></Route> */}
        <Route path="/login" exact component={Login}></Route>
        <Route path="/" component={Layout}></Route>
      </Switch>
    </Router>
  );
}

export default App;
