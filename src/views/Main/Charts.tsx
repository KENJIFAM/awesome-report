import React, { memo, useMemo } from 'react';
import { IReportData } from '../../types';
import { MainSpinner, ChartsContainer, StyledChart, SectionTitle } from './styled';

export interface IChartsProps {
  reportData: IReportData;
}

const Charts = ({
  reportData: {
    total_conversation_count,
    total_user_message_count,
    total_visitor_message_count,
    by_date,
  },
}: IChartsProps) => {
  const overviewData = useMemo(
    () => [
      ['Statistics', 'Count', { role: 'style' }],
      ['Total conversation count', total_conversation_count, '#7357ff'],
      ['Total user message count', total_user_message_count, '#fb7dd2'],
      ['Total visitor message count', total_visitor_message_count, '#39ca97'],
    ],
    [total_conversation_count, total_user_message_count, total_visitor_message_count],
  );

  const dailyDataMap = useMemo(
    () =>
      by_date
        .sort((a, b) => a.date.localeCompare(b.date))
        .map(report => [
          new Date(report.date),
          report.conversation_count,
          report.missed_chat_count,
          report.visitors_with_conversation_count,
        ]),
    [by_date],
  );

  const dailyData = useMemo(
    () => [
      [
        { type: 'date', label: 'Day' },
        'Conversation count',
        'Missed chat count',
        'Visitors with conversation count',
      ],
      ...dailyDataMap,
    ],
    [dailyDataMap],
  );

  return (
    <ChartsContainer>
      <SectionTitle>Graphical data</SectionTitle>
      <StyledChart
        chartType="BarChart"
        loader={<MainSpinner />}
        data={overviewData}
        options={{
          title: 'Overview report',
          chartArea: { width: '50%' },
          bar: { groupWidth: '80%' },
          legend: 'none',
          animation: {
            duration: 1000,
            easing: 'out',
            startup: true,
          },
        }}
      />
      <StyledChart
        chartType="LineChart"
        loader={<MainSpinner />}
        data={dailyData}
        options={{
          title: 'Daily report',
          chartArea: { width: '90%' },
          colors: ['#39ca97', '#fb7dd2', '#7357ff'],
          legend: { position: 'bottom' },
          animation: {
            duration: 1000,
            easing: 'out',
            startup: true,
          },
        }}
      />
    </ChartsContainer>
  );
};

export default memo(Charts);
