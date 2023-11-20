import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
  let query = gql`
    query Posts {
        posts {
            category
            createdAt
            id
            intro
            publishedAt
            slug
            speaker
            title
            updatedAt
        }
    }
  `; 
  
  return await hygraph.request(query)
}
