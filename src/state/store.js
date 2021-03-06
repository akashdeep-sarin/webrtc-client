import mainReducer from './reducer';

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    mainReducer,
    composeWithDevTools()
);

export default store;