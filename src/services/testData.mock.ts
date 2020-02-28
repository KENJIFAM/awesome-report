import { ICardProps } from '../components/Card';
import { Column } from 'react-table';

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
    columnA: randomString(Math.floor(Math.random() * 4 + 3)),
    columnB: randomString(Math.floor(Math.random() * 4 + 3)),
  }));
