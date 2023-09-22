"use client";

import Link from "next/link";
import PopularAnime from "./Popular";
import TrendingAnime from "./Trending";

const Anime = () => {
  return (
    <div className="flex flex-col max-w-xl p-8 m-10 mx-auto md:max-w-3xl xl:max-w-[870px] 2xl:max-w-[1100px] trishan:max-w-[1350px] gap-14 container">
      <TrendingAnime animeCount="limited" />

      <PopularAnime animeCount="limited" />
    </div>
  );
};

export default Anime;
