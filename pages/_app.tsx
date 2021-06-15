import { FC } from 'react';
import { Provider } from 'next-auth/client';
import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ApolloProvider } from '@apollo/client';
import client from '../utils/graphQL/settings';
import '../styles/main.css';
import '../assets/scss/theme.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
};

export default MyApp;
