import React from 'react';
import Card from '../../components/Card';
import { OverviewContainer } from './styled';

export interface IOverviewProps {
  total_conversation_count: number;
  total_user_message_count: number;
  total_visitor_message_count: number;
}

const Overview = ({
  total_conversation_count,
  total_user_message_count,
  total_visitor_message_count,
}: IOverviewProps) => (
  <OverviewContainer>
    <Card name="Total conversation count" value={total_conversation_count} />
    <Card name="Total user message count" value={total_user_message_count} />
    <Card name="Total visitor message count" value={total_visitor_message_count} />
  </OverviewContainer>
);

export default Overview;
