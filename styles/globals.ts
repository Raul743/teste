import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family:"Material Design Icons";
        src:url(./fonts/materialdesignicons-webfont.eot?v=5.8.55);
        src:url(./fonts/materialdesignicons-webfont.eot?#iefix&v=5.8.55) format("embedded-opentype"),
        url(./fonts/materialdesignicons-webfont.woff2?v=5.8.55) format("woff2"),
        url(./fonts/materialdesignicons-webfont.woff?v=5.8.55) format("woff"),
        url(./fonts/materialdesignicons-webfont.ttf?v=5.8.55) format("truetype");
        font-weight:400;
        font-style:normal;
    }
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
        margin:0;
        padding:0;
        outline: none;
    }
    #container{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    
`;

export default GlobalStyle;