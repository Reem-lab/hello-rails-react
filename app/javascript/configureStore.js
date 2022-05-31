
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import GreetingsReducer from './greetings/greetings'

const reducer = combineReducers({
  GreetingsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
