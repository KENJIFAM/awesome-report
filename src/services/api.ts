import axios from 'axios';
import { IGetReportArgs } from '../types';

export const getReport = ({ startDate, endDate, token }: IGetReportArgs) =>
  axios.get(
    `https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=${startDate}&end_date=${endDate}`,
    {
      headers: {
        Authorization: `Token ${token}`,
        Accept: 'application/json',
      },
    },
  );
