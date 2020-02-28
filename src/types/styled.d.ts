import 'styled-components';

declare module 'styled-components' {
  export type BreakPointKey = 'sm' | 'lg';

  export interface DefaultTheme {
    breakpoints: {
      max: (key: BreakPointKey) => string;
      min: (key: BreakPointKey) => string;
    };
    colors: {
      primary: string;
      secondary: string;
      border: string;
      text: string;
      background: string;
    };
  }
}
