import React from 'react';
import { ReactWrapper } from 'enzyme';
import Header, { IHeaderProps } from '../Header';
import { mountWithTheme } from '../../../services/testUtils';
import Input from '../../../components/Input';
import { FetchButton, ClearButton, ButtonContainer } from '../styled';

describe('Header component', () => {
  const headerProps: IHeaderProps = {
    startDate: '2020-02-20',
    endDate: '2020-02-22',
    token: 'token',
    isFetched: false,
    handleChange: () => {},
    handleSubmit: () => {},
    handleClear: () => {},
  };

  const wrapper: ReactWrapper<IHeaderProps> = mountWithTheme(<Header {...headerProps} />);

  it('should render Header component with 3 Input fields', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Input)).toHaveLength(3);
  });

  it('should render 1 button if data is not fetched', () => {
    wrapper.setProps({ isFetched: false });
    const buttonContainer = wrapper.find(ButtonContainer);

    expect(buttonContainer.find('button')).toHaveLength(1);
    expect(buttonContainer.find(FetchButton)).toHaveLength(1);
    expect(buttonContainer.find(ClearButton)).toHaveLength(0);
  });

  it('should render 2 buttons if data is fetched', () => {
    wrapper.setProps({ isFetched: true });
    const buttonContainer = wrapper.find(ButtonContainer);

    expect(buttonContainer.find('button')).toHaveLength(2);
    expect(buttonContainer.find(FetchButton)).toHaveLength(1);
    expect(buttonContainer.find(ClearButton)).toHaveLength(1);
  });
});
