import { combineReducers } from 'redux';
import { todoReducer as todo } from './todoReducer';

const rootReducer = combineReducers({
    todo
})

export default rootReducer;
