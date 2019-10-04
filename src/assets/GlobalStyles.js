import { createGlobalStyle } from "styled-components";
import "./reset.css"

const GlobalStyled = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700");
    *{
        box-sizing:border-box;
    }
    html{height:100%; overflow: auto;}
    body{
        height:100%;
        font-family:"Roboto", "Noto Sans Korean", sans-serif;
        font-size:16px;
        letter-spacing:-0.01em; line-height:1.4; -webkit-font-smoothing : antialiased;
    }
    input, select, textarea {
        vertical-align:middle;
        box-sizing:border-box;
        border-radius:0;
        font-family:"Roboto", "Noto Sans Korean", sans-serif;
        font-size:16px;
    }
    button {
        font-family:"Roboto", "Noto Sans Korean", sans-serif;
        box-sizing:border-box;
        padding:0;
        border:0;
        background:transparent;
        cursor:pointer
    }
    .wrapper{
        max-width:1440px;margin:0 auto;width:100%;
    }
`;

export default GlobalStyled;