import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-ap-south-1.hygraph.com/v2/clqov1bw4sqp801uj7iytdgbb/master',
  cache: new InMemoryCache(),
});

export default client;
