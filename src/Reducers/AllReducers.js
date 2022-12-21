import opdrachtReducer from "./OpdrachtReducer";
import studentReducer from "./StudentReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  opdrachten: opdrachtReducer,
  studenten: studentReducer,
});

export default allReducers;