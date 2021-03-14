import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { tourDetailReducer, tourListReducer } from "./reducers/tourReducer";
import { bagReducer } from "./reducers/bagReducer";


const initialState = {
  
  bag: {
    bagItems: localStorage.getItem("bagItems")
      ? JSON.parse(localStorage.getItem("bagItems"))
      : [],
  },
};
const reducer = combineReducers({
  tourList: tourListReducer,
  tourDetail: tourDetailReducer,
  bag: bagReducer,

});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
