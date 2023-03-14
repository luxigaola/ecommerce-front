import { legacy_createStore as createStore } from "redux";
import createReducer from "./reducers";
import { createHashHistory } from "history";


export const history = createHashHistory()

const store = createStore(
  createReducer
)


export default store