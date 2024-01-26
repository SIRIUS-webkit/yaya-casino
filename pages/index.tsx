import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_GAME_DATA } from "../redux/types";
import GameLists from "../components/GameLists";
import LobbyMenu from "../components/LobbyMenu";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Paginate from "../components/Paginate";

export default function Home(props) {
  const { data, config } = props;
  const gameLists = useSelector((state: any) => state.updategamedata);
  const dispatch = useDispatch();

  // get initial data from server side and update redux
  useEffect(() => {
    if (data) {
      dispatch({ type: ADD_GAME_DATA, data: { ...data, main_search: true } });
    }
  }, [data]);

  return (
    <main>
      <Navbar />
      <div className="max-w-[1200px] mx-4 md:mx-6 lg:mx-auto mt-10">
        <LobbyMenu menu={config?.menu?.lobby?.items} />
        <SearchBar />
        <GameLists games={gameLists} />
        <Paginate />
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  let data;
  let config;

  try {
    const response = await fetch(
      `${process.env.API}/en/games/tiles?pageNumber=1&pageSize=12`
    );
    const responseConfig = await fetch(`${process.env.API}/en/config`);

    data = await response.json();
    config = await responseConfig.json();
  } catch (error) {
    data = { items: [], count: 0 };
    config = null;
  }

  return {
    props: {
      data,
      config,
    },
  };
}
