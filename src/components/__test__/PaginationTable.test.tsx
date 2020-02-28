import React from 'react';
import { ReactWrapper } from 'enzyme';
import PaginationTable, { IPaginationTableProps } from '../PaginationTable';
import Pagination from '../PaginationTable/Pagination';
import { mountWithTheme } from '../../services/testUtils';
import { tableColumnMock, tableDataMock } from '../../services/testData.mock';

describe('PaginationTable component', () => {
  it('should render pagination if data length is more than pageSize', () => {
    const wrapper: ReactWrapper<IPaginationTableProps> = mountWithTheme(
      <PaginationTable columns={tableColumnMock} data={tableDataMock(50)} pageSize={5} />,
    );

    expect(wrapper.find(Pagination)).toHaveLength(1);
  });

  it('should not render pagination if data length is less than pageSize', () => {
    const wrapper: ReactWrapper<IPaginationTableProps> = mountWithTheme(
      <PaginationTable columns={tableColumnMock} data={tableDataMock(3)} pageSize={5} />,
    );

    expect(wrapper.find(Pagination)).toHaveLength(0);
  });
});
