import React from 'react';
import { ReactWrapper } from 'enzyme';
import Charts, { IChartsProps } from '../Charts';
import { ChartsContainer } from '../styled';
import { reportDataMock } from '../../../services/testData.mock';
import { mountWithTheme } from '../../../services/testUtils';
import Chart from 'react-google-charts';

describe('Charts component', () => {
  const wrapper: ReactWrapper<IChartsProps> = mountWithTheme(
    <Charts reportData={reportDataMock} />,
  );

  it('should render a memoized Charts component', () => {
    expect(wrapper.name()).toBe('Memo(Charts)');
    expect(wrapper.find(ChartsContainer)).toHaveLength(1);
  });

  it('should render 2 charts', () => {
    expect(wrapper.find(Chart)).toHaveLength(2);
  });
});
