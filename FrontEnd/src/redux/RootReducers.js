import { combineReducers } from 'redux';
import QuestionReducer from './QuestionReducer';
import TemplateReducer from './TemplateReducer';

const RootReducers = combineReducers({
  QuestionReducer,
  TemplateReducer
});

export default RootReducers;
