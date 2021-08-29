import { combineReducers } from "redux";

//REDUCERS
import user from "./user_reducer";
import defaultReducer from "./default";

const rootReducers = combineReducers({
  user,
  defaultReducer,
});

export default rootReducers;
