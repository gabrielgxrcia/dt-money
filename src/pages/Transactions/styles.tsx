/* eslint-disable react-refresh/only-export-components */
import { css } from "../../../styled-system/css";

interface PriceHighlightProps {
  variant: 'income' | 'outcome';
  children?: React.ReactNode;
}

export const mainStyle = css({ width: '100%', maxW: '1120px', m: '4rem auto 0', p: '0 1.5rem'});
export const tableStyle =  css({ width: '100%', borderCollapse: 'separate', borderSpacing: '0 0.5rem', mt: '1rem'});
export const tdStyle = css({
  padding: '1.25rem 2rem',
  background: '#29292E',
  '&:first-child': {
    borderTopLeftRadius: '6px',
    borderBottomLeftRadius: '6px',
  },
  '&:last-child': {
    borderTopRightRadius: '6px',
    borderBottomRightRadius: '6px',
  },
});

export const PriceHighLight: React.FC<PriceHighlightProps> = ({ variant, children }) => {
  const style = css({
    color: variant === 'income' ? '#00B37E' : '#F75A68',
  });

  return <span className={style}>{children}</span>;
};