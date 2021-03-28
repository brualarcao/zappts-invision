import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --background: #FFFFFF;
    --gray: #00000029;
    --green: #A9C5BA;
    --dark-gray: #707070;
    --black: #000000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(---background);
    color: var(--dark-gray);
    -webkit-font-smoothing: antialiased;
  }

  body, input {
    font-family: 'Mulish', sans-serif;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }

`;
