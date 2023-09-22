import PopularAnime from "@/components/Anime/Popular";
import TrendingAnime from "@/components/Anime/Trending";
import { capitalize } from "@/utils/capitalize";

export function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: `${capitalize(params.slug)} Anime - AnimeSansar`,
  };
}

const DynamicAllAnime = ({ params }: any) => {
  return (
    <div className="flex flex-col max-w-xl p-8 m-10 mx-auto md:max-w-3xl xl:max-w-[870px] 2xl:max-w-[1100px] trishan:max-w-[1350px] gap-14 container">
      {params.slug == "trending" && <TrendingAnime animeCount="all" />}
      {params.slug == "popular" && <PopularAnime animeCount="all" />}
    </div>
  );
};

export default DynamicAllAnime;
