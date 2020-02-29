import React from 'react';
import { ReactWrapper } from 'enzyme';
import Overview, { IOverviewProps } from '../Overview';
import { reportDataMock } from '../../../services/testData.mock';
import { mountWithTheme } from '../../../services/testUtils';
import Card from '../../../components/Card';

describe('Overview component', () => {
  const {
    total_conversation_count,
    total_user_message_count,
    total_visitor_message_count,
  } = reportDataMock;

  const wrapper: ReactWrapper<IOverviewProps> = mountWithTheme(
    <Overview
      {...{ total_conversation_count, total_user_message_count, total_visitor_message_count }}
    />,
  );

  it('should render Overview component', () => {
    expect(wrapper.find(Overview)).toHaveLength(1);
  });

  it('should render 3 Cards', () => {
    expect(wrapper.find(Card)).toHaveLength(3);
  });
});
