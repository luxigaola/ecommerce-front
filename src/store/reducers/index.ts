// import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { testReducer } from "./test.reducer";
// import { History } from "history";
const createReducer = () => combineReducers({
  test:testReducer
  
})

export default createReducer