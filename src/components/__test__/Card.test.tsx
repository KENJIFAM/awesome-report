import React from 'react';
import { ReactWrapper } from 'enzyme';
import Card, { ICardProps } from '../Card';
import { Container, Name, Value } from '../Card/styled';
import { cardMock } from '../../services/testData.mock';
import { mountWithTheme } from '../../services/testUtils';

describe('Card component', () => {
  const { name, value } = cardMock;
  const wrapper: ReactWrapper<ICardProps> = mountWithTheme(<Card name={name} value={value} />);

  it('should render a full card component', () => {
    expect(wrapper.name()).toBe('Card');
    expect(wrapper.find(Container)).toHaveLength(1);
    expect(wrapper.find(Name)).toHaveLength(1);
    expect(wrapper.find(Value)).toHaveLength(1);
  });

  it('should render 3 div elements', () => {
    expect(wrapper.find('div')).toHaveLength(3);
  });

  it('should render correctly text content', () => {
    expect(wrapper.getDOMNode()).toHaveTextContent(`${value}${name}`);
  });

  it('should have correctly props type', () => {
    expect(typeof wrapper.props().name).toBe('string');
    expect(typeof wrapper.props().value).toBe('number');
  });
});
