import { createGlobalStyle } from 'styled-components';
import '@fontsource/kumbh-sans';
//Weights: [100,200,300,400,500,600,700,800,900]
// Styles: [normal]

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Kumbh Sans";
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
`;

export default GlobalStyles;
