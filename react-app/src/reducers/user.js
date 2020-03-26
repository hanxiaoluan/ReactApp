let role = sessionStorage.getItem('role');
const initialUserInfo = { role: role };
export function user(state = initialUserInfo, action) {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        role: action.role,
      });
    default:
      return state;
  }
}
