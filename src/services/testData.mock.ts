import { Column } from 'react-table';
import { ICardProps } from '../components/Card';
import { IReportData, IDailyReport } from '../types';

export const cardMock: ICardProps = {
  name: 'This is card name',
  value: 100,
};

export const tableColumnMock: Column[] = [
  {
    Header: 'Column A',
    accessor: 'columnA',
  },
  {
    Header: 'Column B',
    accessor: 'columnB',
  },
];

// Create a random lowercase string with given length.
const CHARS = 'abcdefghijklmnopqrstuvwxyz';
const randomString = (length: number = 5): string =>
  new Array(length)
    .fill('')
    .map(c => CHARS.charAt(Math.floor(Math.random() * CHARS.length)))
    .join();

// Create a table mock data with 2 columns with given length of rows,
// each cell is a random string from 3-7 chars
export const tableDataMock = (length: number = 100): { columnA: string; columnB: string }[] =>
  new Array(length).fill('').map(row => ({
    columnA: randomString(Math.floor(Math.random() * 5 + 3)),
    columnB: randomString(Math.floor(Math.random() * 5 + 3)),
  }));

// Create random number from 1000 - 1999
const randomNumber = () => Math.floor(Math.random() * 1000 + 1000);

export const dailyDataMock: IDailyReport[] = [
  {
    conversation_count: randomNumber(),
    missed_chat_count: randomNumber(),
    visitors_with_conversation_count: randomNumber(),
    date: '2020-02-20',
  },
  {
    conversation_count: randomNumber(),
    missed_chat_count: randomNumber(),
    visitors_with_conversation_count: randomNumber(),
    date: '2020-02-21',
  },
];

export const reportDataMock: IReportData = {
  total_conversation_count: randomNumber(),
  total_user_message_count: randomNumber(),
  total_visitor_message_count: randomNumber(),
  by_date: dailyDataMock,
};
