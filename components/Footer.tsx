import { HeartIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full gap-1 p-4 py-10 font-medium text-center text-white bg-brand-black">
      <p className="font-semibold">
        Anime<span className="text-state-blue">Sansar</span>
      </p>

      <div className="flex items-center justify-center gap-1">
        <p>- Made with</p>
        <HeartIcon className="w-5 text-state-red" />
        <p>
          by
          <a
            href="https://github.com/trishan9"
            target="_blank"
            className="ml-2 underline hover:no-underline"
          >
            Trishan Wagle
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;