import type { Metadata } from "next";
import Anime from "@/components/Anime";
import Skeleton from "@/components/Skeleton";

export const metadata: Metadata = {
  title: "AnimeSansar",
  description: "Welcome to AnimeSansar",
};

export default function Home() {
  return (
    <main>
      <Anime />
    </main>
  );
}
