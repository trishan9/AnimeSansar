"use client";

import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_TRENDING_ANIME } from "@/graphql/getTrendingAnime";
import { useRecoilState } from "recoil";
import { Duration } from "luxon";
import Link from "next/link";
import { trendingAnimeState, trendingRawAnimeState } from "@/states/anime";
import Skeleton from "../Skeleton";
import Image from "next/image";

const TrendingAnime = (props: any) => {
  const { error, loading, data } = useQuery(GET_TRENDING_ANIME);
  const [, setTrendingRawAnime] = useRecoilState(trendingRawAnimeState);
  const [trendingAnime, setTrendingAnime] =
    useRecoilState<any>(trendingAnimeState);

  useEffect(() => {
    if (data) {
      if (props.animeCount == "all") {
        setTrendingAnime(data.Page.media);
        setTrendingRawAnime(data.Page.media);
      } else {
        setTrendingAnime(data.Page.media.slice(0, 12));
        setTrendingRawAnime(data.Page.media.slice(0, 12));
      }
    }
  }, [data]);

  return (
    <div id="anime-section" className="flex flex-col gap-5">
      <div className="flex items-center justify-between w-full">
        {props.animeCount == "limited" ? (
          <>
            <p className="text-base font-semibold uppercase text-text-primary">
              Trending Now
            </p>

            <Link href={"/anime/all/trending"}>
              <p className="text-sm transition-all ease-in-out cursor-pointer text-text-primary opacity-80 hover:opacity-100 hover:font-medium">
                View all
              </p>
            </Link>
          </>
        ) : (
          <p className="text-xl font-semibold uppercase text-text-primary">
            All Trending Animes
          </p>
        )}
      </div>

      <div className="grid items-start justify-center w-full grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {loading && !trendingAnime && <Skeleton />}

        {trendingAnime?.map((anime: any) => {
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
            <Link href={`/anime/${id}`}>
              <div
                key={id}
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

                <div className="absolute z-20 flex-col hidden w-64 gap-2 p-6 transition-all ease-in-out rounded-md shadow-md -right-[17rem] bg-brand-white xl:group-hover:flex">
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
                          <>
                            <span>{studio?.node?.name}</span>
                            <span>
                              {mainStudio.length > 1 && index == 0 && ", "}
                            </span>
                          </>
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
                      <div className="p-1 px-2 rounded-full text-brand-white bg-state-blue">
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

export default TrendingAnime;
