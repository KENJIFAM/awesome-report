import React from 'react';
import { mount, MountRendererProps } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

export const mountWithTheme = (tree: React.ReactElement, options?: MountRendererProps) => {
  const WrappingThemeProvider = ({ children }: { children: React.ReactChild }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  return mount(tree, { wrappingComponent: WrappingThemeProvider, ...options });
};
