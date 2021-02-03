/* eslint-disable @typescript-eslint/no-unused-vars */
import { gql } from "@apollo/client";

const GET_ALL_QUOTES = gql`
  query GetAllQuotes {
    Quotes {
      Company {
        id
        name
        rating
      }
      id
      monthly
      selected
      setup
      term
      total
    }
  }
`;

const SET_SELECTED = gql`
  mutation SetSelected($id: uuid!, $selected: Boolean!) {
    update_Quotes_by_pk(
      pk_columns: { id: $id }
      _set: { selected: $selected }
    ) {
      selected
      id
    }
  }
`;
