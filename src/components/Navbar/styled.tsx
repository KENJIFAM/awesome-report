import styled from 'styled-components';

export const Root = styled.div(props => ({
  margin: 0,
  padding: 0,
  width: '100%',
  borderBottom: `1px solid ${props.theme.colors.border}`,
}));

export const Container = styled.nav(props => ({
  margin: 'auto',
  padding: '0 30px',
  maxWidth: 1200,
  height: 70,
  display: 'flex',
  alignItems: 'center',
  [props.theme.breakpoints.max('sm')]: {
    padding: '0 16px',
  },
}));

export const Title = styled.div(props => ({
  fontSize: 30,
  fontWeight: 700,
  color: props.theme.colors.primary,
  [props.theme.breakpoints.max('sm')]: {
    fontSize: 26,
  },
}));
