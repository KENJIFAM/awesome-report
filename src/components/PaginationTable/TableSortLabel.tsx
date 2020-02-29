import React, { ReactNode } from 'react';
import { TableSortLabelContainer, ArrowIcon } from './styled';

export interface ITableSortLabelProps {
  label: ReactNode;
  direction?: 'asc' | 'desc';
  active?: boolean;
}

const TableSortLabel = ({ label, direction = 'asc', active = false }: ITableSortLabelProps) => (
  <TableSortLabelContainer active={active}>
    {label}
    <ArrowIcon direction={direction} />
  </TableSortLabelContainer>
);

export default TableSortLabel;
