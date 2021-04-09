import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducers';

/**
 |--------------------------------------------------
 | connect redux store to react native debugger
 |--------------------------------------------------
 */
let composeEnhancer = compose;
if (__DEV__) {
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
/**
 |--------------------------------------------------
 | end of comment
 |--------------------------------------------------
 */
export default function configureStore(initialState) {
    const middleware = [thunk];
    const store = createStore(rootReducer,composeEnhancer(applyMiddleware(...middleware))
    );
    return store;
}
