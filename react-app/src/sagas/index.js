import { take, put, call, fork } from 'redux-saga/effects';
import { getUser } from '@/api/login';
import { getPermission } from '@/api/permission';
import { createHashHistory } from 'history';
import { setToken } from '@/utils/cookie';
const history = createHashHistory();

/**
 * fetch userinfo from Spair
 */
export function* fetchUser(action) {
  try {
    const user = yield call(getUser, 'user');
    const userinfo = user.find(
      (item) =>
        item.username === action.username && item.password === action.password,
    );
    /* yield* put('SET_TOKEN', userinfo.token); */
    setToken(userinfo.token);
    const { permission } = yield call(getPermission, userinfo.role);
    yield put({
      type: 'LOGINFLOW',
      role: userinfo.role,
      permission: permission,
    });
    history.push('/');
  } catch (e) {
    throw new Error(e);
  }
}
/**
 * log in flow
 */
export function* loginFlow() {
  while (true) {
    const request = yield take('LOGIN');
    const { data } = request;
    yield call(fetchUser, data);
  }
}
export default function* root() {
  yield fork(loginFlow);
}
