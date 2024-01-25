import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { css } from "../../../../styled-system/css";
import { useAtom } from "jotai";
import { transactionsAtom } from "../../../pages/Transactions/atoms/transactionAtoms";

interface SummaryCardProps {
  variant?: 'green'
}

export function SummaryCard () {
  const [transactions] = useAtom(transactionsAtom)

  const income = transactions.reduce(
    (acc, transaction) => transaction.type === 'income' ? acc + transaction.price : acc,
    0
  )

  return (
    <div className={css({ background: '#323238', borderRadius: '6px', p: '2rem'})}>
      <header className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#C4C4CC'})}>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
      </header>
        <strong className={css({ display: 'block', mt: '1rem', fontSize: '2rem'})}>R$ {income.toFixed(2)}</strong>
    </div>
  )
}

export function SummaryCardLeave () {
  const [transactions] = useAtom(transactionsAtom)

  const outcome = transactions.reduce(
    (acc, transaction) => transaction.type === 'outcome' ? acc + transaction.price : acc,
    0
  )

  return (
    <div className={css({ background: '#323238', borderRadius: '6px', p: '2rem'})}>
      <header className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#C4C4CC'})}>
          <span>Saída</span>
          <ArrowCircleDown size={32} color="#f75a68"/>
      </header>
        <strong className={css({ display: 'block', mt: '1rem', fontSize: '2rem'})}>R$ {outcome.toFixed(2)}</strong>
    </div>
  )
}

export const SummaryCardTotal: React.FC<SummaryCardProps> = ({ variant }) => {
  const [transactions] = useAtom(transactionsAtom)

  const total = transactions.reduce(
    (acc, transaction) => transaction.type === 'income' ? acc + transaction.price : acc - transaction.price,
    0
  )

  return (
    <div className={css({ background: variant === 'green' ? '#015F43' : '#323238', borderRadius: '6px', p: '2rem'})}>
      <header className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#C4C4CC'})}>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
      </header>
        <strong className={css({ display: 'block', mt: '1rem', fontSize: '2rem'})}>R$ {total.toFixed(2)}</strong>
    </div>
  )
}