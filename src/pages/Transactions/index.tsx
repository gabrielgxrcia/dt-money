import { mainStyle, tableStyle } from './styles'
import { Header } from '../../components/Header/HeaderContainer'
import { Summary } from '../../components/Summary/SummaryContainer'
import { SearchForm } from './components/SearchForm/SearchForm'
import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import {
  transactionsAtom,
  loadTransactionsAtom,
} from './atoms/transactionAtoms'
import { TransactionRow } from './components/TransactionsRow/TransactionRow'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Transactions() {
  const [transactions] = useAtom(transactionsAtom)
  const [, loadTransactions] = useAtom(loadTransactionsAtom)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadTransactions().finally(() => setIsLoading(false))
  }, [loadTransactions])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Header />
      <Summary />

      <main className={mainStyle}>
        <SearchForm />

        <table className={tableStyle}>
          <tbody>
            {transactions.map((transaction) => (
              <TransactionRow
                key={transaction.id}
                transaction={transaction}
                dateFormatter={dateFormatter}
                priceFormatter={priceFormatter}
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}
