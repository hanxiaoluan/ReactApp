import { combineReducers } from "redux";
import menuIsFold from "./toggleMenu";
import { postsBySubreddit, selectedSubreddit } from "./reddit";
const rootReducer = combineReducers({
  menuIsFold,
  postsBySubreddit,
  selectedSubreddit
});
export default rootReducer;
