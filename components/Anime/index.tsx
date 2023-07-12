"use client";

import { Suspense } from "react";
import PopularAnime from "./Popular";
import TrendingAnime from "./Trending";

const Anime = () => {
  return (
    <div className="flex flex-col p-8 m-10 mx-auto gap-14 max-w-7xl">
      <Suspense fallback={<div>loading</div>}>
        <TrendingAnime />
      </Suspense>

      <PopularAnime />
    </div>
  );
};

export default Anime;
