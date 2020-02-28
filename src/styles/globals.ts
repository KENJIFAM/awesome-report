import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle({
  body: {
    margin: 0,
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
        'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    fontSize: 16,
    backgroundColor: '#fcfcfc',
  },
  '*': {
    boxSizing: 'border-box',
  },
});
