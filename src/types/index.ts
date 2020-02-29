export interface IGetReportArgs {
  startDate: string;
  endDate: string;
  token: string;
}

export interface IDailyReport {
  date: string;
  conversation_count: number;
  missed_chat_count: number;
  visitors_with_conversation_count: number;
}

export interface IReportData {
  total_conversation_count: number;
  total_user_message_count: number;
  total_visitor_message_count: number;
  by_date: IDailyReport[];
}

export interface ICell {
  cell: {
    value: string;
  };
}
