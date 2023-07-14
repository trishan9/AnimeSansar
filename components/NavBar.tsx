import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full p-6 text-white bg-[#273043]">
      <p className="text-2xl font-bold">
        <Link href={"/"}>
          <span className="cursor-pointer">Anime</span>
          <span className="cursor-pointer text-state-blue">Sansar</span>
        </Link>
      </p>
    </nav>
  );
};

export default NavBar;
