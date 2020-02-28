import { DefaultTheme, BreakPointKey } from 'styled-components';

const breakpointSize = (key: BreakPointKey) => (key === 'sm' ? '640px' : '1024px');

const theme: DefaultTheme = {
  breakpoints: {
    max: key => `@media (max-width: ${breakpointSize(key)})`,
    min: key => `@media (min-width: ${breakpointSize(key)})`,
  },
  colors: {
    primary: '#7357ff',
    secondary: '#595368',
    border: '#e6e6e6',
    text: '#202125',
    background: '#f0f0f0',
  },
};

export { theme };
