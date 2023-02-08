// store.js
import { createStore } from "redux";

// Initial state
const initialState = {
  valuename: "",
  valuelastname: ""
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_INPUT_VALUE":
      return {
        ...state,
        valuename: action.valuename,
        valuelastname: action.valuelastname
      };
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

export default store;