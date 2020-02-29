import React, { useState, useEffect } from 'react';
import { IGetReportArgs, IReportData } from '../../types';
import { getReport } from '../../services/api';
import { handleError, handleSuccess } from '../../services/notifications';
import { Container, MainSpinner, AlertText } from './styled';
import Header from './Header';
import Overview from './Overview';
import DetailTable from './DetailTable';
import Charts from './Charts';

const DEFAULT_REPORT_ARGS: IGetReportArgs = {
  startDate: '2017-05-01',
  endDate: '2017-06-15',
  token: '',
};

const Main = () => {
  const [reportArgs, setReportArgs] = useState<IGetReportArgs>(DEFAULT_REPORT_ARGS);
  const [reportData, setReportData] = useState<IReportData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const reportArgsFromLocalStorage = localStorage.getItem('reportArgs');
    if (reportArgsFromLocalStorage) {
      const reportArgsObj = JSON.parse(reportArgsFromLocalStorage);
      setReportArgs(reportArgsObj);
      fetchData(reportArgsObj);
    }
  }, []);

  const fetchData = async (reportArgs: IGetReportArgs) => {
    setLoading(true);
    try {
      const res = await getReport(reportArgs);
      setReportData(res.data as IReportData);
      setLoading(false);
      setError(false);
      handleSuccess('Fetched successfully!');
      localStorage.setItem('reportArgs', JSON.stringify(reportArgs));
    } catch (e) {
      setLoading(false);
      setError(true);
      handleError(e);
    }
  };

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) =>
    setReportArgs({
      ...reportArgs,
      [name]: value,
    });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();
    fetchData(reportArgs);
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    localStorage.removeItem('reportArgs');
    setReportData(null);
    setReportArgs(DEFAULT_REPORT_ARGS);
    handleSuccess('All data inputted has been cleared!');
  };

  const renderContent = () => {
    if (loading) {
      return <MainSpinner />;
    }
    if (error) {
      return (
        <AlertText variant="error">Error happened! Please try again or come back later!</AlertText>
      );
    }
    if (!reportData) {
      return (
        <AlertText variant="info">
          Please fill in start date, end date, token then fetch to see report!
        </AlertText>
      );
    }
    return (
      <>
        <Overview
          total_conversation_count={reportData.total_conversation_count}
          total_user_message_count={reportData.total_user_message_count}
          total_visitor_message_count={reportData.total_visitor_message_count}
        />
        <DetailTable dailyData={reportData.by_date} />
        <Charts reportData={reportData} />
      </>
    );
  };

  return (
    <Container>
      <Header
        {...{ ...reportArgs, handleChange, handleSubmit, handleClear, isFetched: !!reportData }}
      />
      {renderContent()}
    </Container>
  );
};

export default Main;
