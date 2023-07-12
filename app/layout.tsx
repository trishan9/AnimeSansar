"use client";

import { RecoilRoot } from "recoil";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Overpass } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

const overpass = Overpass({
  subsets: ["latin"],
  display: "swap",
});

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Page: {
        merge: true,
      },
    },
  }),
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={overpass.className}>
      <body className="bg-background">
        <ApolloProvider client={apolloClient}>
          <RecoilRoot>
            <NavBar />

            {children}

            <Footer/>
          </RecoilRoot>
        </ApolloProvider>
      </body>
    </html>
  );
}
