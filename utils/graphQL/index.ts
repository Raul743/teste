import { gql } from '@apollo/client';
import Client from './settings';
import { propQuery } from './types';

class GraphQL {
  get(query: propQuery) {
    return new Promise((resolve, reject) => {
      Client.query({
        query: gql`
            query {
                ${query}
            }
        `,
      })
        .then(({ data }) => resolve(data))
        .catch(err => reject(err));
    });
  }
}

export default new GraphQL();
