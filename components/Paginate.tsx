import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { ADD_GAME_DATA, UPDATE_LOADING } from "../redux/types";

interface PageProps {
  selected: number;
}

function Paginate() {
  const dispatch = useDispatch();
  const gamelists = useSelector((state: any) => state.updategamedata);

  // get page data
  async function handlePageClick(event: PageProps) {
    dispatch({ type: UPDATE_LOADING, loading: true });
    try {
      const response = await fetch(
        `${process.env.API}/en/games/tiles?pageNumber=${event.selected}&pageSize=12`
      );
      const data = await response.json();
      dispatch({ type: ADD_GAME_DATA, data: { ...data, main_search: true } });
      dispatch({ type: UPDATE_LOADING, loading: false });
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: UPDATE_LOADING, loading: false });
  }

  // remove pagination list after search from menu and search input
  return (
    <div className="my-20">
      {gamelists.main_search && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={100}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="flex flex-wrap w-full md:space-x-8 md:gap-0 gap-3 justify-center items-center"
          pageClassName="bg-blue-400 px-4 py-1 text-white rounded-sm"
          activeClassName="bg-blue-600 text-white"
          nextClassName="text-md font-bold"
          previousClassName="text-md font-bold"
        />
      )}
    </div>
  );
}

export default Paginate;
