import { createStore } from 'redux';
// import { combineReducers } from 'redux-immutable';
import reducer from './reducers';

// const allReducers = combineReducers({ reducer });

export default createStore(reducer)