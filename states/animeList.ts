import { atom } from "recoil";

export const rawAnimeListState = atom({
  key: "rawAnimeList",
  default: null,
});

export const animeListState = atom({
  key: "animeList",
  default: null,
});