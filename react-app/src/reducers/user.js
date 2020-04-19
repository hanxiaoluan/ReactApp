const initialUserInfo = { role: '', permission: [] };
export function user(state = initialUserInfo, action) {
  switch (action.type) {
    case 'LOGINFLOW':
      return Object.assign({}, state, {
        role: action.role,
        permission: action.permission,
      });
    case 'LOGOUT':
      return Object.assign({}, state, { role: '', permission: [] });
    default:
      return state;
  }
}
