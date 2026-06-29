import {gql} from '@apollo/client';

export const GET_EMPLOYEES = gql`
  query {
    users {
      data {
        id
        name
        email
        phone
      }
    }
}
`
export const GET_EMPLOYEE = gql`
        query GetEmployee($id: ID!){
            user(id : $id) {
                id
                name
                email
                phone
            }
        }
    `

export const ADD_EMPLOYEE = gql`
    mutation(
        $name: String!,
        $username: String!,
        $email: String!,
        $phone: String
        ) {
        createUser(
            input: {
            name: $name
            username: $username
            email: $email
            phone: $phone
            }
        ) {
            id
            name
            username
            email
            phone
        }
    }

`