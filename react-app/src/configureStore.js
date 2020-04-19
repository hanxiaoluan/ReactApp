import { createLogger } from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@/sagas';
import rootReducer from './reducers/index';
const sagaMiddleware = createSagaMiddleware();
const middleware = [ThunkMiddleware, sagaMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);
export default store;
