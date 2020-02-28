import styled from 'styled-components';

export const Container = styled.div(props => ({
  boxShadow: '0px 2px 2px rgba(0,0,0,0.04), 0px 0px 2px rgba(0,0,0,0.03)',
  borderRadius: 10,
  backgroundColor: 'white',
  border: `1px solid ${props.theme.colors.border}`,
  width: '100%',
  margin: 8,
  textAlign: 'center',
  [props.theme.breakpoints.min('sm')]: {
    width: 'calc((99.99% - 48px) / 3)',
  },
}));

export const Value = styled.div(props => ({
  fontSize: 50,
  padding: '20px 0',
}));

export const Name = styled.div(props => ({
  fontSize: 20,
  paddingBottom: 40,
}));
