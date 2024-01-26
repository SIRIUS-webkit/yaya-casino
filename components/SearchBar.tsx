import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_GAME_DATA,
  UPDATE_FILTER_CONFIG,
  UPDATE_LOADING,
} from "../redux/types";

function SearchBar() {
  const [value, setValue] = useState("");
  const [validateError, setValidateError] = useState("");
  const dispatch = useDispatch();
  const filterconfig = useSelector((state: any) => state.filterconfig);

  // search page data
  async function searchGameLists() {
    if (value === "") {
      setValidateError("This field is required.");
      return null;
    }
    setValidateError("");
    dispatch({ type: UPDATE_LOADING, loading: true });
    try {
      const response = await fetch(
        `${process.env.API}/en/games/tiles?search=${value}&pageSize=12`
      );
      const data = await response.json();
      dispatch({ type: ADD_GAME_DATA, data: { ...data, main_search: false } });
      dispatch({
        type: UPDATE_FILTER_CONFIG,
        data: { ...filterconfig, search: value },
      });
      dispatch({ type: UPDATE_LOADING, loading: false });
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: UPDATE_LOADING, loading: false });
  }

  return (
    <div className="my-10">
      <p className="font-bold text-[18px]">Search</p>
      <div className="flex space-x-3">
        <input
          type="text"
          name="search"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (!e.target.value) {
              dispatch({
                type: UPDATE_FILTER_CONFIG,
                data: { ...filterconfig, search: "" },
              });
            }
          }}
          className="default-input"
        />
        <button type="button" className="primary-btn" onClick={searchGameLists}>
          Search
        </button>
      </div>
      <p className="text-[12px] text-red-400">
        {validateError && validateError}
      </p>
    </div>
  );
}

export default SearchBar;
