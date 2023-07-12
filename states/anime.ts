import { atom } from "recoil";

export const trendingRawAnimeState = atom({
  key: "trendingRawAnime",
  default: null,
});

export const trendingAnimeState = atom({
  key: "trendingAnime",
  default: null,
});

export const popularRawAnimeState = atom({
  key: "popularRawAnime",
  default: null,
});

export const popularAnimeState = atom({
  key: "popularAnime",
  default: null,
});