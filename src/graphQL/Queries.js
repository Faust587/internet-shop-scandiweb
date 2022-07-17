import {gql} from "@apollo/client";

export const GET_CATEGORIES_QUERY = gql`
  query GetCategories {
    categories {
      name
    }
  }`;

export const GET_CURRENCIES_QUERY = gql`
  query GetCurrencies {
    currencies {
      label, symbol
    }
  }`;


export const GET_PRODUCTS_QUERY = gql`
  query GetRockAlbums ($category: String!) {
    category (input: {title: $category}) {
      products {
        id,
        name,
        gallery,
        inStock,
        prices {
          currency {
            symbol
          },
          amount
        }
      }
    }
  }`;

export const GET_PRODUCT_BY_ID_QUERY = gql`
  query GetProductById ($id: String!) {
    product(id: $id) {
      id,
      name,
      brand,
      gallery,
      description,
      prices {
        currency {
          label
          symbol
        },
        amount
      },
      attributes {
        id
        name,
        type,
        items {
          id,
          displayValue,
          value  
        }  
      }  
    }  
  }
`;
