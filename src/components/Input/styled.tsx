import styled from 'styled-components';

export const Container = styled.span(props => ({
  margin: 0,
  padding: 0,
}));

export const Label = styled.div(props => ({
  fontSize: 12,
  color: props.theme.colors.secondary,
}));

export const InputContainer = styled.span(props => ({
  display: 'flex',
  position: 'relative',
}));

export const StyledInput = styled.input<{ addonBefore: boolean; addonAfter: boolean }>(props => ({
  background: 'white',
  height: 32,
  width: '100%',
  fontSize: 14,
  fontFamily: 'inherit',
  lineHeight: '14px',
  border: `1px solid ${props.theme.colors.border}`,
  color: props.theme.colors.text,
  borderRadius: 4,
  paddingLeft: 8,
  verticalAlign: 'middle',
  position: 'relative',
  outline: 0,
  ...(props.type === 'date' && {
    '::-webkit-inner-spin-button': {
      display: 'none',
    },
    '::-webkit-clear-button': {
      display: 'none',
    },
  }),
  ...(props.addonBefore && {
    borderRadius: '0 4px 4px 0',
    borderLeft: 'none',
  }),
  ...(props.addonAfter && {
    paddingRight: 30,
  }),
}));

export const AddonAfter = styled.span(props => ({
  position: 'absolute',
  right: 12,
  top: '50%',
  transform: 'translateY(-50%)',
  lineHeight: 0,
}));
