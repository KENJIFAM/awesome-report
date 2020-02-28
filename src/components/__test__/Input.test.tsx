import React from 'react';
import { ReactWrapper } from 'enzyme';
import Input, { IInputProps } from '../Input';
import Button from '../Button';
import { Container, InputContainer, StyledInput, Label, AddonAfter } from '../Input/styled';
import { mountWithTheme } from '../../services/testUtils';

describe('Input component', () => {
  it('should render a full default input component', () => {
    const wrapper: ReactWrapper<IInputProps> = mountWithTheme(<Input />);

    expect(wrapper.name()).toBe('Input');
    expect(wrapper.find(Container)).toHaveLength(1);
    expect(wrapper.find(InputContainer)).toHaveLength(1);
    expect(wrapper.find(StyledInput)).toHaveLength(1);
    expect(wrapper.find(Label)).toHaveLength(0);
    expect(wrapper.find(Button)).toHaveLength(0);
    expect(wrapper.find(AddonAfter)).toHaveLength(0);
  });

  it('should render correctly an input with label', () => {
    const wrapper: ReactWrapper<IInputProps> = mountWithTheme(<Input label="Label" />);
    expect(wrapper.find(Label)).toHaveLength(1);
  });

  it('should render correctly an input with addons', () => {
    const wrapper: ReactWrapper<IInputProps> = mountWithTheme(
      <Input addonBefore={<span>Before</span>} addonAfter={<span>After</span>} />,
    );
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(AddonAfter)).toHaveLength(1);
  });
});
