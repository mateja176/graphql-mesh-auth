const { gql, GraphQLClient } = require('graphql-request');
const fetch = require('node-fetch');

global.Headers = fetch.Headers;

const graphQLClient = new GraphQLClient('http://localhost:4000/graphql', {
  headers: {
    authorization: 'Bearer TEST',
  },
});

const query = gql`
  {
    getUsers {
      id
      name
    }
  }
`;

graphQLClient
  .request(query)
  .then((data) => console.log(JSON.stringify(data, null, 2)));
