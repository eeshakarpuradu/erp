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
    mutation ($name: String, $email: String, $phone: Int!) {
        addEmployee(name: $name, email: $email, phone: $phone){
            id,
            name,
            email,
            department
        }
    }

`