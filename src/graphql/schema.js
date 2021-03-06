import { gql } from "@apollo/client";

export const GET_USERS = gql(`
query {
  users(distinct_on: timestamp) {
    id
    name
    rocket
    timestamp
  }
}
`)


export const INSERT_USER = gql(`
mutation ($name:String, $rocket:String) {
  insert_users(objects: {name: $name, rocket: $rocket}) {
    returning{
      id
      name
      rocket
      timestamp
    }
  }
}
`)


export const DELETE_USER = gql(`
mutation($id:uuid) {
  delete_users(where: {id: {_eq:$id}}){
    returning{
      id
    }
  }
}
`)


export const DELETE_ALL_USERS = gql(`
mutation {
  delete_users(where: {id: {_is_null: false}}) {
    returning {
      id
    }
  }
}
`)


//=============================================PAGINATOR_TEST=====================================================

export const GET_USERS_PAGINATOR = gql(`
query ($limit: Int, $offset:Int) {
  users(limit: $limit, offset: $offset) {
    name
    id
    rocket
    timestamp
  }
}
`)


//===========================================USERS_SCROLL_PAGINATOR===============================================


export const GET_USERS_SCROLL_PAGINATOR = gql(`
query ($limit: Int, $offset:Int) {
  users(limit: $limit, offset: $offset) {
    name
    id
    rocket
    timestamp
  }
}
`)

