import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body, input, button {
        font-family: 'Space Mono', monospace;
    }

    html {
        font-size: 62.5%;
    }

    :root {
       --color-blue: #0079FF; 
       --color-blue-600: #4B6A9B;
       --color-blue-700: #1E2A47;
       --color-grey: #F6F8FF;
       --color-grey-200: #E5E5E5;
       --color-grey-700: #697C9A;
       --color-dark: #2B3442;
       --color-dark-700: #141D2F;
       --color-white: #FFFFFF;
       --color-white-600: #FEFEFE;

       --bg: #F6F8FF;
       --logo: #222731;
    }
`;
