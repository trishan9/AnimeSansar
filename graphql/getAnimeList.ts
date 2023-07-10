import { gql } from "@apollo/client";

export const GET_ANIMELIST = gql`
  query {
    Page(page: 1) {
      media {
        id
        type
        seasonYear
        type
        episodes
        genres
        isAdult
        coverImage {
          medium
        }
        bannerImage
        status
        countryOfOrigin
        title {
          english
          native
          userPreferred
        }
      }
    }
  }
`;
