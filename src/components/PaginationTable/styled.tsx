import styled, { CSSObject, DefaultTheme } from 'styled-components';
import { ReactComponent as ArrowDownIcon } from '../../assets/icon-arrow-down.svg';
import Button from '../Button';

export const TableContainer = styled.div({
  width: '100%',
  overflowX: 'auto',
});

export const Table = styled.table(props => ({
  borderSpacing: 0,
  display: 'table',
  width: '100%',
  borderCollapse: 'collapse',
  color: props.theme.colors.text,
  whiteSpace: 'nowrap',
}));

export const TableHead = styled.thead(props => ({
  display: 'table-header-group',
}));

export const TableBody = styled.tbody(props => ({
  display: 'table-row-group',
  minHeight: 270,
}));

export const TableRow = styled.tr(props => ({
  color: 'inherit',
  display: 'table-row',
  verticalAlign: 'middle',
  outline: 0,
  ':hover': {
    backgroundColor: props.theme.colors.background,
  },
  ':only-child:hover': {
    backgroundColor: 'transparent',
  },
}));

const tableCellStyle = (theme: DefaultTheme): CSSObject => ({
  display: 'table-cell',
  verticalAlign: 'inherit',
  borderBottom: `1px solid ${theme.colors.border}`,
  textAlign: 'left',
  padding: 16,
});

export const TableHeadCell = styled.th(props => ({
  ...tableCellStyle(props.theme),
  lineHeight: '24px',
  fontWeight: 500,
}));

export const TableCell = styled.td(props => tableCellStyle(props.theme));

export const TableSortLabelContainer = styled.span<{ active: boolean }>(props => ({
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'flex-start',
  flexDirection: 'inherit',
  alignItems: 'center',
  svg: {
    opacity: 0,
  },
  ':focus': {
    color: props.theme.colors.secondary,
  },
  ':hover': {
    color: props.theme.colors.secondary,
    svg: {
      opacity: 0.5,
    },
  },
  ...(props.active && {
    color: props.theme.colors.text,
    svg: {
      opacity: 1,
    },
  }),
}));

export const ArrowIcon = styled(ArrowDownIcon)<{ direction: 'asc' | 'desc' }>(props => ({
  fontSize: 18,
  height: 18,
  width: 18,
  marginRight: 4,
  marginLeft: 4,
  color: props.theme.colors.primary,
  transition:
    'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  userSelect: 'none',
  transform: `rotate(${props.direction === 'desc' ? 0 : 180}deg)`,
}));

export const PaginationContainer = styled.div(props => ({
  color: 'inherit',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  alignItems: 'center',
  outline: 0,
  padding: 16,
  margin: 0,
}));

export const PageButtons = styled.span(props => ({
  [props.theme.breakpoints.max('sm')]: {
    display: 'none',
  },
}));

export const ThreeDot = styled.span(props => ({
  textAlign: 'center',
  minWidth: 32,
  height: 'auto',
  padding: '0 6px',
  margin: '0 3px',
  color: props.theme.colors.text,
}));

export const ItemButton = styled(Button)(props => ({
  minWidth: 32,
  height: 32,
  padding: '0 6px',
  margin: '0 3px',
  transition:
    'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  ':hover': {
    backgroundColor: props.theme.colors.background,
    '@media (hover: none)': {
      backgroundColor: 'transparent',
    },
  },
  ':focus': {
    backgroundColor: props.theme.colors.background,
    outline: 0,
  },
  ':disabled': {
    opacity: 0.5,
  },
  ...(props.active && {
    backgroundColor: props.theme.colors.background,
    fontWeight: 600,
  }),
}));

export const PageInfo = styled.span(props => ({
  padding: '0 6px',
  margin: '0 3px',
}));
