import styled, { CSSProperties } from 'styled-components';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Spinner from '../../components/Spinner';
import Chart from 'react-google-charts';

export const Container = styled.div(props => ({
  margin: '0 auto',
  maxWidth: 1200,
  padding: '10px 30px 0',
  position: 'relative',
  [props.theme.breakpoints.max('sm')]: {
    padding: '10px 16px 0',
  },
}));

const alertColor: { [key: string]: CSSProperties } = {
  info: {
    color: '#1976d2',
    backgroundColor: '#e8f4fd',
  },
  error: {
    color: '#dc004e',
    backgroundColor: '#fae0e9',
  },
};

export const AlertText = styled.div<{ variant: 'info' | 'error' }>(props => ({
  ...alertColor[props.variant],
  border: `1px solid ${alertColor[props.variant].color}`,
  borderRadius: 10,
  padding: 16,
  marginTop: 10,
}));

export const HeaderContainer = styled.form(props => ({
  margin: -8,
  padding: '10px 0',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  [props.theme.breakpoints.max('sm')]: {
    justifyContent: 'space-between',
  },
}));

export const InputContainer = styled.div(props => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  [props.theme.breakpoints.max('sm')]: {
    justifyContent: 'space-between',
    width: 'calc(99.99% - 96px)',
  },
}));

export const DateInput = styled(Input)(props => ({
  margin: 8,
  [props.theme.breakpoints.max('sm')]: {
    width: 'calc((99.99% - 32px) / 2)',
  },
}));

export const TokenInput = styled(Input)(props => ({
  margin: 8,
  [props.theme.breakpoints.max('sm')]: {
    width: '100%',
  },
}));

export const ButtonContainer = styled.div(props => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  [props.theme.breakpoints.max('sm')]: {
    width: 96,
  },
}));

export const FetchButton = styled(Button)<{ big?: boolean }>(props => ({
  width: 80,
  margin: 8,
  ...(props.big && {
    [props.theme.breakpoints.max('sm')]: {
      height: 80,
    },
  }),
}));

export const ClearButton = styled(Button)(props => ({
  width: 80,
  margin: 8,
}));

export const MainSpinner = styled(Spinner)(props => ({
  position: 'absolute',
  margin: 'calc((99.99% - 96px) / 3) calc((99.99% - 96px) / 2)',
}));

export const OverviewContainer = styled.div(props => ({
  display: 'flex',
  flexWrap: 'wrap',
  margin: -8,
  padding: '10px 0',
}));

export const DetailTableContainer = styled.div(props => ({
  width: '100%',
  margin: '10px auto',
  paddingTop: 10,
  boxShadow: '0px 2px 2px rgba(0,0,0,0.04), 0px 0px 2px rgba(0,0,0,0.03)',
  borderRadius: 10,
  backgroundColor: 'white',
  border: `1px solid ${props.theme.colors.border}`,
}));

export const SectionTitle = styled.div(props => ({
  fontSize: 30,
  padding: 16,
  fontWeight: 500,
}));

export const StyledYear = styled.span(props => ({
  color: props.theme.colors.secondary,
  fontStyle: 'italic',
  opacity: 0.4,
}));

export const ChartsContainer = styled(DetailTableContainer)(props => ({
  padding: '20px 0',
  margin: '20px auto',
}));

export const StyledChart = styled(Chart)(props => ({
  width: '100%',
  height: 400,
  padding: 10,
  [props.theme.breakpoints.max('sm')]: {
    height: 300,
  },
}));
