import gql from "graphql-tag"

export const GET_A_POST = gql`
    {
        getAPost {
            id,
            title,
            body
        }
    }
`