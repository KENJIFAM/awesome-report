import React, { ReactNode } from 'react';
import { TableSortLabelContainer, ArrowIcon } from './styled';

interface Props {
  label: ReactNode;
  direction?: 'asc' | 'desc';
  active?: boolean;
}

const TableSortLabel = ({ label, direction = 'asc', active = false }: Props) => (
  <TableSortLabelContainer active={active}>
    {label}
    <ArrowIcon direction={direction} />
  </TableSortLabelContainer>
);

export default TableSortLabel;
