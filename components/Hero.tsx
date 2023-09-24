import { ChevronRightIcon } from "@heroicons/react/24/solid";

const heroSectionData = [
  {
    imgUrl: "https://anilist.co/img/landing/stats.svg",
    imgAlt: "Stats",
    title: "Discover your obsessions",
    desc: "What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-depth statistics.",
  },

  {
    imgUrl: "https://anilist.co/img/landing/apps.svg",
    imgAlt: "Apps",
    title: "Bring AniList anywhere",
    desc: "Keep track of your progress on-the-go with one of many AniList apps across iOS, Android, macOS, and Windows.",
  },

  {
    imgUrl: "https://anilist.co/img/landing/social.svg",
    imgAlt: "Social",
    title: "Join the conversation",
    desc: "Share your thoughts with our thriving community, make friends, socialize, and receive recommendations.",
  },

  {
    imgUrl: "https://anilist.co/img/landing/custom.svg",
    imgAlt: "Custom",
    title: "Tweak it to your liking",
    desc: "Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode.",
  },
];

const Hero = () => {
  return (
    <div className="mx-auto md:mt-12 bg-[#0A1625] w-full lg:max-w-[1100px] py-14 px-10 lg:px-20 flex flex-col justify-center items-center lg:rounded-2xl gap-6 text-white relative mb-8">
      <p className="text-3xl font-bold">The next-generation anime platform</p>
      <p className="lg:flex flex-col gap-2 text-[#acd5f2] justify-center items-center text-xl">
        <span>Track, share, and discover your favorite </span>
        <span>anime with AnimeSansar.</span>
      </p>

      <div className="grid w-full grid-cols-1 my-10 md:grid-cols-2 gap-14">
        {heroSectionData.map((data) => (
          <div className="flex items-center gap-10">
            <img className="w-20" src={data.imgUrl} alt={data.imgAlt} />
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold">{data.title}</p>
              <p className="text-[#acd5f2] text-sm">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <a href="#anime-section" className="absolute bottom-[-20px]">
        <button className="px-10 py-2.5 text-lg font-semibold rounded-full bg-[#3577FF] shadow-md transition-all ease-in-out hover:shadow-[#3577FF] flex items-center justify-between relative">
          <p className="mr-6">Explore Anime</p>

          <div className="absolute bg-[#d9e6ff] rounded-full w-9 h-9 right-0 mr-2 flex justify-center items-center">
            <ChevronRightIcon className="w-6 ml-[2px] text-[#3577FF]" />
          </div>
        </button>
      </a>
    </div>
  );
};

export default Hero;
