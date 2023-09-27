"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POPULAR_ANIME } from "@/graphql/getPopularAnime";
import { useRecoilState } from "recoil";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Duration } from "luxon";
import Link from "next/link";
import Image from "next/image";
import { popularAnimeState, popularRawAnimeState } from "@/states/anime";
import Skeleton from "../Skeleton";

const PopularAnime = (props: any) => {
  const {
    error: popularError,
    loading: popularLoading,
    data: popularData,
  } = useQuery(GET_POPULAR_ANIME);

  const [popularRawAnime, setPopularRawAnime] = useRecoilState<any>(popularRawAnimeState);
  const [popularAnime, setPopularAnime] = useRecoilState<any>(popularAnimeState);
  const [searchError, setSearchError] = useState<null | string>(null);

  useEffect(() => {
    if (popularData) {
      if (props.animeCount == "all") {
        setPopularAnime(popularData.Page.media);
        setPopularRawAnime(popularData.Page.media);
      } else {
        setPopularAnime(popularData.Page.media.slice(0, 12));
        setPopularRawAnime(popularData.Page.media.slice(0, 12));
      }
    }
  }, [popularData]);

  const handleSearch = (query: string) => {
    setSearchError(null);
    const filteredPopularAnimes = popularRawAnime.filter((anime: any) => {
      const animeName = anime.title.userPreferred.toLowerCase();
      return animeName.startsWith(query.toLowerCase());
    });
    setPopularAnime(filteredPopularAnimes);

    if (filteredPopularAnimes.length == 0) {
      setSearchError(`Search results not found for: ${query}`);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between w-full">
        {props.animeCount == "limited" ? (
          <>
            <p className="text-base font-semibold uppercase text-text-primary">
              All Time Popular
            </p>

            <Link href={"/anime/all/popular"}>
              <p className="text-sm transition-all ease-in-out cursor-pointer text-text-primary opacity-80 hover:opacity-100 hover:font-medium">
                View all
              </p>
            </Link>
          </>
        ) : (
          <div className="flex flex-col gap-8">
            <p className="text-xl font-semibold uppercase text-text-primary">
              All Popular Animes
            </p>

            <div className="flex flex-col gap-1 mb-8">
              <p className="text-[15px] text-text-primary">Search</p>
              <div className="relative flex items-center">
                <input
                  className="py-1.5 px-2 rounded-md shadow-lg w-48 pl-8 outline-none"
                  type="search"
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <MagnifyingGlassIcon className="absolute left-0 w-4 ml-2 opacity-50 text-text-primary" />
              </div>
            </div>
          </div>
        )}
      </div>

      {searchError && <p>{searchError}</p>}

      <div className="grid items-start justify-center w-full grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {popularLoading && !popularAnime && <Skeleton />}

        {popularAnime?.map((anime: any) => {
          const {
            title,
            id,
            coverImage,
            nextAiringEpisode,
            seasonYear,
            season,
            studios,
            format,
            episodes,
            genres,
            status,
          } = anime;

          const dur = Duration.fromObject({
            seconds: nextAiringEpisode?.timeUntilAiring,
          });

          const mainStudio = studios?.edges.filter((studio: any) => {
            return studio.isMain === true;
          });

          return (
            <Link href={`/anime/${id}`} key={id}>
              <div
                className="relative flex flex-col items-start gap-2 cursor-pointer group"
              >
                <Image
                  className="object-cover w-56 h-64 transition-all ease-in-out rounded-md group-hover:shadow-lg"
                  width={224}
                  height={256}
                  src={coverImage.large}
                  alt={title.userPreferred}
                />

                <p className="gap-6 text-sm font-medium transition-all ease-in-out text-text-primary group-hover:text-state-blue">
                  {title.userPreferred}
                </p>

                <div className="absolute z-20 flex-col hidden w-64 gap-2 p-6 transition-all ease-in-out rounded-md shadow-md -right-[17rem] bg-brand-white lg:group-hover:flex">
                  <div className="airing-details">
                    {nextAiringEpisode?.episode ? (
                      <p className="font-medium text-text-primary">
                        Ep {nextAiringEpisode?.episode} airing in{" "}
                        {Math.floor(dur.as("days"))} days
                      </p>
                    ) : (
                      <p className="font-medium capitalize text-text-primary">
                        <span>{season}</span> {seasonYear}
                      </p>
                    )}
                  </div>

                  <div className="mb-3 episode-details">
                    <p className="text-sm font-bold text-state-blue">
                      {mainStudio?.map((studio: any, index: number) => {
                        return (
                          <span key={index}>
                            <span>{studio?.node?.name}</span>
                            <span>
                              {mainStudio.length > 1 && index == 0 && ", "}
                            </span>
                          </span>
                        );
                      })}
                    </p>

                    <div className="flex gap-2 font-medium text-text-primary">
                      <p className="text-sm">{format}</p>

                      {episodes && (
                        <p className="text-sm">{episodes} episodes</p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs font-medium lowercase genre-badges">
                    {genres.slice(0, 2).map((genre: string) => (
                      <div key={genre} className="p-1 px-2 rounded-full text-brand-white bg-state-blue">
                        <p>{genre}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-start">
                    <div className="flex items-center p-1 px-2 font-medium rounded-full text-brand-black bg-cool">
                      <p className="text-xs">{status}</p>
                    </div>
                  </div>

                  <div className="absolute z-50 w-3 h-3 transform rotate-45 -left-1 top-5 bg-brand-white" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PopularAnime;
