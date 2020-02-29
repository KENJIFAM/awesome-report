import React from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import {
  Table,
  TableRow,
  TableHeadCell,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
} from './styled';
import TableSortLabel from './TableSortLabel';
import Pagination, { IPaginationProps } from './Pagination';

export interface IPaginationTableProps {
  columns: any;
  data: any;
  pageSize?: number;
  defaultSortBy?: {
    id: string;
    desc?: boolean;
  }[];
}

const PaginationTable = ({ columns, data, pageSize = 5, defaultSortBy }: IPaginationTableProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      disableSortRemove: true,
      initialState: {
        pageIndex: 0,
        pageSize: pageSize,
        ...(defaultSortBy && { sortBy: defaultSortBy }),
      },
    },
    useSortBy,
    usePagination,
  );

  const paginationProps: IPaginationProps = {
    canPreviousPage,
    canNextPage,
    pageCount,
    pageIndex,
    gotoPage,
    nextPage,
    previousPage,
  };

  return (
    <>
      <TableContainer>
        <Table {...getTableProps}>
          <TableHead>
            {headerGroups.map(headerGroup => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <TableHeadCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <TableSortLabel
                      label={column.render('Header')}
                      active={column.isSorted}
                      direction={column.isSortedDesc ? 'desc' : 'asc'}
                    />
                  </TableHeadCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                  ))}
                </TableRow>
              );
            })}
            {page.length < 5 && (
              <TableRow style={{ height: 54 * (5 - page.length) }}>
                <TableCell colSpan={4} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {data.length > pageSize && <Pagination {...paginationProps} />}
    </>
  );
};

export default PaginationTable;
