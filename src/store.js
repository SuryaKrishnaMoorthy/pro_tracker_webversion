import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/AuthReducer";

export default () => createStore(reducers, applyMiddleware(thunk, logger));
