import styled from 'styled-components';

export interface IButtonProps {
  primary?: boolean;
  secondary?: boolean;
  active?: boolean;
  group?: 'left' | 'middle' | 'right';
}

const Button = styled.button<IButtonProps>(props => ({
  backgroundColor: 'white',
  fontSize: 14,
  lineHeight: '14px',
  textAlign: 'center',
  border: `1px solid ${props.theme.colors.border}`,
  height: 32,
  color: props.theme.colors.text,
  cursor: 'pointer',
  borderRadius: 4,
  outline: 0,
  ':disabled': {
    cursor: 'default',
  },
  ...(props.primary && {
    backgroundColor: props.theme.colors.primary,
    color: 'white',
  }),
  ...(props.secondary && {
    backgroundColor: props.theme.colors.background,
  }),
  ...(props.active && {
    color: props.theme.colors.primary,
  }),
  ...(props.group === 'left' && {
    borderRadius: '4px 0 0 4px',
  }),
  ...(props.group === 'right' && {
    borderRadius: '0 4px 4px 0',
  }),
  ...(props.group === 'middle' && {
    borderRadius: 0,
  }),
}));

export default Button;
