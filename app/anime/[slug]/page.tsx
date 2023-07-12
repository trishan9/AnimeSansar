import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AnimeSansar",
  description: "Welcome to AnimeSansar",
};

const DynamicAnime = ({ params }: any) => {
  return <div>{params.slug}</div>;
};

export default DynamicAnime;
