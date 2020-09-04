// import rootReducer from ""
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const middleware = [thunk];

const store = createStore(
    reducers, 
    {},
    applyMiddleware()
);

export default store;