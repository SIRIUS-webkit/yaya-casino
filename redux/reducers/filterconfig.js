import { UPDATE_FILTER_CONFIG } from "../types";

const initialState = {
  menu: "",
  search: "",
};

const filterconfig = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER_CONFIG:
      return action.data;
    default:
      return state;
  }
};

export default filterconfig;
