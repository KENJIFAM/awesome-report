import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globals';
import { theme } from './styles/theme';
import App from './App';

const StyledApp = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);

ReactDOM.render(<StyledApp />, document.getElementById('root'));
