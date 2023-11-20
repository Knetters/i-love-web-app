import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {
  let query = gql`
    query Posts {
        posts {
            category
            intro
            publishedAt
            slug
            speaker
            title
        }
    }
  `; 
  
  return await hygraph.request(query)
}
