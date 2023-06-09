import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk));
