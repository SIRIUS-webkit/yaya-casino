import { ADD_GAME_DATA } from "../types";

const initialState = {
  count: 0,
  items: [],
  main_search: true,
};

const updategamedata = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GAME_DATA:
      return action.data;
    default:
      return state;
  }
};

export default updategamedata;
