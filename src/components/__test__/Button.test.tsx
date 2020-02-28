import React from 'react';
import { ReactWrapper } from 'enzyme';
import Button, { IButtonProps } from '../Button';
import { mountWithTheme } from '../../services/testUtils';
import { theme } from '../../styles/theme';

describe('Button component', () => {
  let wrapper: ReactWrapper<IButtonProps>;
  beforeEach(() => (wrapper = mountWithTheme(<Button>Test</Button>)));
  afterEach(() => wrapper.unmount());

  it('should render a styled button', () => {
    expect(wrapper.name()).toBe('styled.button');
    expect(wrapper.children().getElement().type).toBe('button');
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.text()).toBe('Test');
    expect(wrapper.getDOMNode()).toHaveStyle(`
      color: ${theme.colors.text};
      background-color: white;
      border-radius: 4px;
      border: 1px solid ${theme.colors.border};
    `);
  });

  it('should render a correct active button', () => {
    wrapper.setProps({ active: true });
    expect(wrapper.props().active).toBe(true);
    expect(wrapper.getDOMNode()).toHaveStyle(`
      color: ${theme.colors.primary};
      background-color: white;
    `);
  });

  it('should render a correct primary button', () => {
    wrapper.setProps({ primary: true });
    expect(wrapper.props().primary).toBe(true);
    expect(wrapper.getDOMNode()).toHaveStyle(`
      color: white;
      background-color: ${theme.colors.primary};
    `);
  });

  it('should render a correct group button', () => {
    wrapper.setProps({ group: 'left' });
    expect(wrapper.props().group).toBe('left');
    expect(wrapper.getDOMNode()).toHaveStyle(`
      border-radius: 4px 0 0 4px;
    `);

    wrapper.setProps({ group: 'right' });
    expect(wrapper.props().group).toBe('right');
    expect(wrapper.getDOMNode()).toHaveStyle(`
      border-radius: 0 4px 4px 0;
    `);

    wrapper.setProps({ group: 'middle' });
    expect(wrapper.props().group).toBe('middle');
    expect(wrapper.getDOMNode()).toHaveStyle(`
      border-radius: 0;
    `);
  });
});
