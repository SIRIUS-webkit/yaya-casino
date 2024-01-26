import { ADD_GAME_DATA } from "../types";

// dispatch function data
const updategamedata = (data) => (dispatch) => {
  dispatch({
    type: ADD_GAME_DATA,
    data,
  });
};

export default updategamedata;
