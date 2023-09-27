const socialMedia = [
  {
    platform: "linkedin",
    url: "https://linkedin.com/in/trishan9",
    imageUrl: "https://img.icons8.com/ios-filled/50/ffffff/linkedin.png",
  },

  {
    platform: "github",
    url: "https://github.com/trishan9",
    imageUrl: "https://img.icons8.com/ios-filled/50/ffffff/github.png",
  },

  {
    platform: "medium",
    url: "https://medium.com/@trishan9",
    imageUrl: "https://img.icons8.com/ios-filled/50/ffffff/medium-logo.png",
  },

  {
    platform: "twitter",
    url: "https://twitter.com/trishan999",
    imageUrl: "https://img.icons8.com/ios-filled/50/ffffff/twitterx.png",
  },
];

const Footer = () => {
  return (
    <footer className="flex items-start justify-between w-full px-5 py-20 font-medium text-center text-white mt-[30rem] md:py-10 md:pb-20 lg:px-72 bg-brand-black">
      <div className="flex flex-col items-start">
        <p className="text-xl font-semibold">
          Anime<span className="text-state-blue">Sansar&nbsp;</span>
        </p>
        <p className="text-sm">
          By{" "}
          <a
            target="_blank"
            href="https://github.com/trishan9"
            className="underline cursor-pointer hover:no-underline"
          >
            Trishan Wagle
          </a>
        </p>
      </div>

      <div className="flex items-center justify-center gap-4">
        {socialMedia.map((data) => (
          <a key={data.platform} target="_blank" href={data.url}>
            <img
              width="30"
              height="30"
              src={data.imageUrl}
              alt={data.platform}
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
