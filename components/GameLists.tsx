import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import LoadingSkeleton from "./LoadingSkeleton";

function GameLists({ games }) {
  const filterconfig = useSelector((state: any) => state.filterconfig);
  const loading = useSelector((state: any) => state.loading);

  // no item
  if (games?.items?.length === 0) {
    return (
      <>
        <p className="font-md">There is no items based on the filter items.</p>
        {filterconfig?.menu && <p>Menu --- {filterconfig?.menu}</p>}
        {filterconfig?.search && <p>Input --- {filterconfig?.search}</p>}
      </>
    );
  }

  return (
    <div>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div className="grid grid-cols-12 gap-5">
          {games?.items?.map((game) => (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-3"
              key={game.id}
            >
              <div className="relative w-full h-[350px]">
                <Image
                  src={game.image.original.src}
                  alt={game.image.alt}
                  layout="fill"
                  className="object-cover rounded-md"
                />
              </div>
              <p className="font-[700] text-md mt-3">{game.gameText}</p>
              <p>Provider: {game.provider}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GameLists;
