import { gql} from '@apollo/client';

export const POSTS = gql`
query MyQuery {
    posts{
      author {
        name
      }
      content {
        text
      }
      coverImage {
        url
      }
      date
      excerpt
      slug
      title
    }
  }
  
`;