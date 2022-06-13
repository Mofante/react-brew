import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: "Lato";
        color: #1C1D23;
        margin: 0;
        background-color: #EFF9FB;
    }
`;

export default GlobalStyles;
