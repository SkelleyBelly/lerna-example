import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import * as Types from "../../types";

export type GetAllQuotesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetAllQuotesQuery = { __typename?: "query_root" } & {
  MostProfitableCompany: Array<
    { __typename?: "Companies" } & Pick<
      Types.Companies,
      "id" | "name" | "profit"
    >
  >;
  Quotes: Array<
    { __typename?: "Quotes" } & Pick<
      Types.Quotes,
      "id" | "monthly" | "selected" | "setup" | "term" | "total"
    > & {
        Company: { __typename?: "Companies" } & Pick<
          Types.Companies,
          "id" | "name" | "rating"
        >;
      }
  >;
};

export type SetSelectedMutationVariables = Types.Exact<{
  id: Types.Scalars["uuid"];
  selected: Types.Scalars["Boolean"];
}>;

export type SetSelectedMutation = { __typename?: "mutation_root" } & {
  update_Quotes_by_pk?: Types.Maybe<
    { __typename?: "Quotes" } & Pick<Types.Quotes, "selected" | "id">
  >;
};

export const GetAllQuotesDocument = gql`
  query GetAllQuotes {
    MostProfitableCompany: Companies(order_by: { profit: desc }, limit: 1) {
      id
      name
      profit
    }
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

/**
 * __useGetAllQuotesQuery__
 *
 * To run a query within a React component, call `useGetAllQuotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllQuotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllQuotesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllQuotesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllQuotesQuery,
    GetAllQuotesQueryVariables
  >
) {
  return Apollo.useQuery<GetAllQuotesQuery, GetAllQuotesQueryVariables>(
    GetAllQuotesDocument,
    baseOptions
  );
}
export function useGetAllQuotesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllQuotesQuery,
    GetAllQuotesQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetAllQuotesQuery, GetAllQuotesQueryVariables>(
    GetAllQuotesDocument,
    baseOptions
  );
}
export type GetAllQuotesQueryHookResult = ReturnType<
  typeof useGetAllQuotesQuery
>;
export type GetAllQuotesLazyQueryHookResult = ReturnType<
  typeof useGetAllQuotesLazyQuery
>;
export type GetAllQuotesQueryResult = Apollo.QueryResult<
  GetAllQuotesQuery,
  GetAllQuotesQueryVariables
>;
export const SetSelectedDocument = gql`
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
export type SetSelectedMutationFn = Apollo.MutationFunction<
  SetSelectedMutation,
  SetSelectedMutationVariables
>;

/**
 * __useSetSelectedMutation__
 *
 * To run a mutation, you first call `useSetSelectedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetSelectedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setSelectedMutation, { data, loading, error }] = useSetSelectedMutation({
 *   variables: {
 *      id: // value for 'id'
 *      selected: // value for 'selected'
 *   },
 * });
 */
export function useSetSelectedMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SetSelectedMutation,
    SetSelectedMutationVariables
  >
) {
  return Apollo.useMutation<SetSelectedMutation, SetSelectedMutationVariables>(
    SetSelectedDocument,
    baseOptions
  );
}
export type SetSelectedMutationHookResult = ReturnType<
  typeof useSetSelectedMutation
>;
export type SetSelectedMutationResult = Apollo.MutationResult<
  SetSelectedMutation
>;
export type SetSelectedMutationOptions = Apollo.BaseMutationOptions<
  SetSelectedMutation,
  SetSelectedMutationVariables
>;
