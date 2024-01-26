import { UPDATE_FILTER_CONFIG } from "../types";

const filterconfig = (loading) => (dispatch) => {
  dispatch({
    type: UPDATE_FILTER_CONFIG,
    loading,
  });
};

export default filterconfig;
