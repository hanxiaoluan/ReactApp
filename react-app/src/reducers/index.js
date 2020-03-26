import { combineReducers } from 'redux';
import menuIsFold from './toggleMenu';
import { postsBySubreddit, selectedSubreddit } from './reddit';
import { user } from './user';
const rootReducer = combineReducers({
  menuIsFold,
  postsBySubreddit,
  selectedSubreddit,
  user,
});
export default rootReducer;
