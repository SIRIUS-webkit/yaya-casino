import React from "react";

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-12 gap-5">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((game) => (
        <div className="col-span-12 md:col-span-6 lg:col-span-3" key={game}>
          <div className="loading-skeleton w-full h-[350px]" />
          <p className="loading-skeleton w-full h-5" />
          <p className="loading-skeleton w-full h-5" />
        </div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;
