export interface GetReportArgs {
  startDate: string;
  endDate: string;
  token: string;
}

export interface DailyReport {
  date: string;
  conversation_count: number;
  missed_chat_count: number;
  visitors_with_conversation_count: number;
}

export interface ReportData {
  total_conversation_count: number;
  total_user_message_count: number;
  total_visitor_message_count: number;
  by_date: DailyReport[];
}

export interface Cell {
  cell: {
    value: string;
  };
}
