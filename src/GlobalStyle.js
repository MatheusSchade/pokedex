import { createGlobalStyle } from "styled-components";
import { BackGroundColor } from "./constants/colors";


export const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${BackGroundColor};
        font-family: sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`