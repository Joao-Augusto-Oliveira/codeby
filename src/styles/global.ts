import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  :root {
    --blue: #3B74F2;
    --white: #ffffff;
    --black: #333;
    --lightgray: #D1D8E5;
    --darkgray: #A5A5A5;
    --lightgreen: #C7FFA6;
    --darkgreen: #217A01;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--lightgray);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Poppins, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
