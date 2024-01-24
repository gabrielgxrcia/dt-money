import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { css } from "../../../../styled-system/css";

interface SummaryCardProps {
  variant?: 'green'
}

export function SummaryCard () {
  return (
    <div className={css({ background: '#323238', borderRadius: '6px', p: '2rem'})}>
      <header className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#C4C4CC'})}>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
      </header>
        <strong className={css({ display: 'block', mt: '1rem', fontSize: '2rem'})}>R$ 17.400,00</strong>
    </div>
  )
}

export function SummaryCardLeave () {
  return (
    <div className={css({ background: '#323238', borderRadius: '6px', p: '2rem'})}>
      <header className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#C4C4CC'})}>
          <span>Saída</span>
          <ArrowCircleDown size={32} color="#f75a68"/>
      </header>
        <strong className={css({ display: 'block', mt: '1rem', fontSize: '2rem'})}>R$ 17.400,00</strong>
    </div>
  )
}

export const SummaryCardTotal: React.FC<SummaryCardProps> = ({ variant }) => {
  return (
    <div className={css({ background: variant === 'green' ? '#015F43' : '#323238', borderRadius: '6px', p: '2rem'})}>
      <header className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#C4C4CC'})}>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
      </header>
        <strong className={css({ display: 'block', mt: '1rem', fontSize: '2rem'})}>R$ 17.400,00</strong>
    </div>
  )
}
