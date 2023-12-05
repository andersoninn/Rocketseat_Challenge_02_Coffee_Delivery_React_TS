import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${({theme}) => theme.background}

    }

    body, button, input, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        max-width: 1440px;
        margin: auto;
        
    }
`;