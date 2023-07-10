"use client";

import "./globals.css";
import { RecoilRoot } from "recoil";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache(),
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={apolloClient}>
          <RecoilRoot>{children}</RecoilRoot>
        </ApolloProvider>
      </body>
    </html>
  );
}
