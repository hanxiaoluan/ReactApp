import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import loadable from './utils/loadable';
import "./App.css";
import '@/styles/base.scss';
const Layout = loadable(() => import('./containers/Layout.jsx'));
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/dashboard" />}></Route>
        <Route component={Layout}></Route>
      </Switch>
    </Router>
  );
}

export default App;
