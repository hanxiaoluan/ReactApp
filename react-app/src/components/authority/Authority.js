import React, { Component, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getToken } from '@/utils/cookie';
import { getUser } from '@/api/login';
import { getPermission } from '@/api/permission';
import routes from '@/router/index.js';
function authority(routes, permission) {
  return routes && routes.filter((route) => permission.includes(route.name));
}

const Authority = ({ role, reloadRender, permission }) => {
  const hasRole = async () => {
    const token = getToken();
    if (role) return;
    try {
      let res = await getUser('user');
      const newRole = res.find((item) => item.token === token).role;
      const { permission } = await getPermission(newRole);
      reloadRender(newRole, permission);
    } catch (error) {}
  };
  useEffect(() => {
    hasRole();
  }, []);
  return (
    <Switch>
      {authority(routes, permission).map((item) => {
        return (
          <Route
            path={item.path}
            key={item.path}
            exact
            render={(routeProps) => (
              <item.component {...routeProps}></item.component>
            )}
          ></Route>
        );
      })}
    </Switch>
  );
};
const mapStateToProps = (state, ownProps) => ({
  isFold: state.menuIsFold.isFold,
  role: state.user.role,
  permission: state.user.permission,
});
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    reloadRender: (role, permission) =>
      dispatch({ type: 'LOGINFLOW', role: role, permission: permission }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Authority);
