import { combineReducers } from 'redux';
import QuestionReducer from './QuestionReducer';

const RootReducers = combineReducers({
  QuestionReducer,
});

export default RootReducers;
