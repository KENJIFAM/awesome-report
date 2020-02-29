import React, { memo, useMemo } from 'react';
import { IDailyReport, ICell } from '../../types';
import PaginationTable from '../../components/PaginationTable';
import { Column } from 'react-table';
import { DetailTableContainer, SectionTitle, StyledYear } from './styled';

export interface IDetailTableProps {
  dailyData: IDailyReport[];
}

const renderDate = (date: string) => {
  const dateArray = new Date(date).toDateString().split(' ');
  return (
    <span>
      {`${dateArray[2]} ${dateArray[1]} `}
      <StyledYear>{`(${dateArray[3]})`}</StyledYear>
    </span>
  );
};

const DetailTable = ({ dailyData }: IDetailTableProps) => {
  const columns: Column[] = useMemo(
    () => [
      {
        Header: 'Conversation count',
        accessor: 'conversation_count',
      },
      {
        Header: 'Missed chat count',
        accessor: 'missed_chat_count',
      },
      {
        Header: 'Visitors with conversation count',
        accessor: 'visitors_with_conversation_count',
      },
      {
        Header: 'Date',
        accessor: 'date',
        Cell: ({ cell: { value } }: ICell) => renderDate(value),
      },
    ],
    [],
  );

  const data: IDailyReport[] = useMemo(
    () =>
      dailyData.map(row => ({
        conversation_count: row.conversation_count,
        missed_chat_count: row.missed_chat_count,
        visitors_with_conversation_count: row.visitors_with_conversation_count,
        date: row.date,
      })),
    [dailyData],
  );

  return (
    <DetailTableContainer>
      <SectionTitle>Report by date</SectionTitle>
      <PaginationTable
        columns={columns}
        data={data}
        pageSize={5}
        defaultSortBy={[{ id: 'date', desc: false }]}
      />
    </DetailTableContainer>
  );
};

export default memo(DetailTable);
