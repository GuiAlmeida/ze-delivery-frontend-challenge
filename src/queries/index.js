import { gql } from '@apollo/client';

export const POC_SEARCH_METHOD = gql`
  query pocSearchMethod(
    $now: DateTime!
    $algorithm: String!
    $lat: String!
    $long: String!
  ) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      id
    }
  }
`;

export const ALL_CATEGORIES_SEARCH = gql`
  query allCategoriesSearch {
    allCategory {
      title
      id
    }
  }
`;

export const POC_PRODUCTS = gql`
  query poc($id: ID!, $categoryId: Int, $search: String) {
    poc(id: $id) {
      id
      products(categoryId: $categoryId, search: $search) {
        id
        title
        images {
          url
        }
        productVariants {
          price
        }
      }
    }
  }
`;
