import { createLogger } from "redux-logger";
import ThunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
const middleware = [ThunkMiddleware];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);
export default createStore(rootReducer, enhancer);
