import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --background-dark: #13121b;
    --background-light: #191622;
    --text: #E1E1E6;
    --black: #000;
    --light-purple: #988BC7;
    --purple: #7159c1;
    --orange: #E89E64;
    --green: #67E480;
    --pink: #FF79C6;
    --blue: #78D1E1;
    --yellow: #E7DE79;
    --red: #E96379;
  }

  html {
    scroll-behavior: smooth;

    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background-dark);
    -webkit-font-smooting: antialiased;
  }

  body, input, textarea, button {
    font: "Poppins", Arial, Helvetica, sans-serif;
    color: var(--text);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.8);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .react-modal-content {
    max-width: 576px;
    width: 100%;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }

  .react-modal-close {
    position: absolute;
    right: 5rem;
    top: 5rem;
    border: 0;
    background: transparent;

    transition: filter 0.1s ease;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
