import { FC } from "react";
import { Provider } from "next-auth/client";
import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/autocomplete.css";
import "antd/dist/antd.css";
import "../styles/semantic-ui-css/semantic.css";
import { ApolloProvider } from "@apollo/client";
import client from "../utils/graphQL/settings";
import "../styles/main.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../assets/scss/theme.scss";
import "react-datepicker/dist/react-datepicker.css";
import "flatpickr/dist/themes/material_blue.css";
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
