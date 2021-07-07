import { combineReducers } from "redux";
import { quotesReducer as quotes } from "./fetchReducer";

export default combineReducers({
  quotes,
});
