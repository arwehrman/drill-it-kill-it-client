import { combineReducers } from 'redux';
import drills from './drillsReducer';
import drillFormData from './drillFormData';

export default combineReducers({
  drills, drillFormData,
});
