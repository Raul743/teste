import { gql, useMutation } from '@apollo/client';

export const Registrar = gql`
  mutation($input: UsersMutationInput!) {
    users(input: $input) {
      data {
        id
        username
        email
        isActive
      }
      errors {
        field
        messages
      }
    }
  }
`;
