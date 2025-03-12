import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #0a192f;
    --secondary-color: #64ffda;
    --text-color: #8892b0;
    --light-text-color: #ccd6f6;
    --background-color: #0a192f;
    --card-background: #112240;
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-sans);
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.3;
  }

  a {
    text-decoration: none;
    color: var(--secondary-color);
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--light-text-color);
    font-weight: 600;
  }
`;

export default GlobalStyles; 