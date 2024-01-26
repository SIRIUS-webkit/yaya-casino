import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import updategamedata from "./updategamedata";
import loading from "./loading";
import filterconfig from "./filterconfig";

// combine all reducers.
const appReducer = combineReducers({
  updategamedata,
  loading,
  filterconfig,
});

const rootReducer = (state, action) => {
  let newState = state;

  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.data,
    };

    return nextState;
  }

  return appReducer(newState, action);
};

export default rootReducer;
