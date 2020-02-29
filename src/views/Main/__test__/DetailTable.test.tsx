import React from 'react';
import { ReactWrapper } from 'enzyme';
import DetailTable, { IDetailTableProps } from '../DetailTable';
import { DetailTableContainer, SectionTitle } from '../styled';
import { dailyDataMock } from '../../../services/testData.mock';
import { mountWithTheme } from '../../../services/testUtils';
import PaginationTable from '../../../components/PaginationTable';

describe('DetailTable component', () => {
  it('should render a full DetailTable component', () => {
    const wrapper: ReactWrapper<IDetailTableProps> = mountWithTheme(
      <DetailTable dailyData={dailyDataMock} />,
    );

    expect(wrapper.find(DetailTableContainer)).toHaveLength(1);
    expect(wrapper.find(SectionTitle)).toHaveLength(1);
    expect(wrapper.find(PaginationTable)).toHaveLength(1);
  });
});
