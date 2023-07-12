import { gql } from "@apollo/client";

export const GET_TRENDING_ANIME = gql`
  query {
    Page {
      pageInfo {
        currentPage
        lastPage
        hasNextPage
      }
      media(sort: TRENDING_DESC, type: ANIME) {
        id
        title {
          userPreferred
        }
        description
        coverImage {
          large
        }
        bannerImage
        rankings {
          id
          rank
          context
          year
        }
        nextAiringEpisode {
          id
          episode
          timeUntilAiring
        }
        format
        episodes
        duration
        status
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        season
        seasonYear
        averageScore
        meanScore
        popularity
        favourites
        source
        genres
        tags {
          id
          name
          rank
        }
        countryOfOrigin
        externalLinks {
          url
          site
          icon
        }
        streamingEpisodes {
          thumbnail
          url
          site
          title
        }
        studios {
          edges {
            isMain
            node {
              name
              siteUrl
            }
          }
        }
      }
    }
  }
`;
