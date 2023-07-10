"use client";

import { useQuery } from "@apollo/client";
import { GET_ANIMELIST } from "@/graphql/getAnimeList";
import { useRecoilState } from "recoil";
import { animeListState, rawAnimeListState } from "@/states/animeList";
import { useEffect } from "react";

export default function Home() {
  const { error, loading, data } = useQuery(GET_ANIMELIST);
  const [, setRawAnimeList] = useRecoilState(rawAnimeListState);
  const [animeList, setAnimeList] = useRecoilState(animeListState);

  useEffect(() => {
    if (data) {
      setRawAnimeList(data.Page.media);
      setAnimeList(data.Page.media);
    }
  }, [data]);

  loading && console.log("Loading...");

  error && console.log(error);

  animeList && console.log(animeList);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      Hello World!!!
    </main>
  );
}
