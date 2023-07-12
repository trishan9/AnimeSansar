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
        <p>by Trishan Wagle</p>
      </div>
    </footer>
  );
};

export default Footer;
