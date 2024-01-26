import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_GAME_DATA,
  UPDATE_FILTER_CONFIG,
  UPDATE_LOADING,
} from "../redux/types";

interface MenuItemProp {
  id: number;
  name: string;
}

function LobbyMenu({ menu }) {
  const dispatch = useDispatch();
  const [activeId, setActiveId] = useState("all games");
  const filterconfig = useSelector((state: any) => state.filterconfig);

  // filter game list based on categories
  async function filterGameLists(cat: string) {
    try {
      setActiveId(cat.toLowerCase());
      dispatch({
        type: UPDATE_FILTER_CONFIG,
        data: { ...filterconfig, menu: cat.toLowerCase() },
      });

      let response;

      dispatch({ type: UPDATE_LOADING, loading: true });

      if (cat.toLowerCase() === "all games") {
        response = await fetch(`${process.env.API}/en/games/tiles?pageSize=12`);
      } else {
        response = await fetch(
          `${
            process.env.API
          }/en/games/tiles?gameCategories=${cat.toLowerCase()}&search=${
            filterconfig.search
          }`
        );
      }

      const data = await response.json();
      dispatch({
        type: ADD_GAME_DATA,
        data: { ...data, main_search: cat.toLowerCase() === "all games" },
      });
      dispatch({ type: UPDATE_LOADING, loading: false });
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: UPDATE_LOADING, loading: false });
  }

  return (
    <div className="flex flex-wrap sm:space-x5 space-x-0 gap-5">
      {menu?.map((item: MenuItemProp) => (
        <div
          key={item.id}
          className={`${
            activeId === item.name.toLowerCase() ? "bg-blue-600" : "bg-blue-400"
          } px-3 py-2 rounded-md`}
        >
          <button type="button" onClick={() => filterGameLists(item.name)}>
            <p className="text-white font-bold capitalize">{item.name}</p>
          </button>
        </div>
      ))}
    </div>
  );
}

export default LobbyMenu;
