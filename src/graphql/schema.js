import { gql } from "@apollo/client";

export const GET_TODOS = gql(`
query todos{
  todos {
    data {
     id
      title
      completed
      user {
        name
        username
        phone
      }
    }
  }
}
`)