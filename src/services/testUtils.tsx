import React from 'react';
import { mount, MountRendererProps } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

export const mountWithTheme = (children: React.ReactElement, options?: MountRendererProps) => {
  const WrappingThemeProvider = (props: { children: React.ReactChild }) => (
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
  );

  return mount(children, { wrappingComponent: WrappingThemeProvider, ...options });
};
