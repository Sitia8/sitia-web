import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #106ba3;
    --secondary-color: #0e5a8a;
    --text-color: #2c3e50;
    --text-light: #394b59;
    --background-color: #f4f6f9;
    --white: #ffffff;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background-color);
    color: var(--text-color);
  }

  .bp4-button {
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-2px);
    }
  }

  .bp4-navbar {
    padding: 0;
  }

  .bp4-card {
    transition: all 0.3s ease;
  }

  .bp4-input {
    transition: all 0.2s ease;
    &:focus {
      box-shadow: 0 0 0 1px var(--primary-color), 0 0 0 3px rgba(16, 107, 163, 0.3);
    }
  }

  .bp4-form-group {
    margin-bottom: 20px;
  }

  .bp4-heading {
    color: var(--primary-color);
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--secondary-color);
    }
  }
`;

export default GlobalStyles;
