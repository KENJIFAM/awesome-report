import React from 'react';
import { ReactWrapper } from 'enzyme';
import Spinner, { ISpinnerProps } from '../Spinner';
import { mountWithTheme } from '../../services/testUtils';

describe('Spinner component', () => {
  it('should render correctly spinner size', () => {
    const wrapper: ReactWrapper<ISpinnerProps> = mountWithTheme(<Spinner size={100} />);

    expect(wrapper.getDOMNode()).toHaveStyle(`
      width: 100px;
      height: 100px;
    `);
  });
});
