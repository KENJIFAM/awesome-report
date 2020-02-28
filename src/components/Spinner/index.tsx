import styled from 'styled-components';

export interface ISpinnerProps {
  size?: number;
}

const Spinner = styled.div<ISpinnerProps>(({ size = 64, theme }) => ({
  background: 'transparent',
  width: size,
  height: size,
  borderRadius: '100%',
  border: `${size / 20}px solid ${theme.colors.primary}`,
  borderBottomColor: 'transparent',
  display: 'inline-block',
  animation: 'clip 0.75s 0s infinite linear',
  animationFillMode: 'both',
  '@keyframes clip': {
    '0%': { transform: 'rotate(0deg) scale(1)' },
    '50%': { transform: 'rotate(180deg) scale(0.8)' },
    '100%': { transform: 'rotate(360deg) scale(1)' },
  },
}));

export default Spinner;
