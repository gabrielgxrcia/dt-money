import { PriceHighLight, mainStyle, tableStyle, tdStyle } from './styles'
import { Header } from '../../components/Header/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { transactionsAtom } from './atoms/transactionAtoms'

export function Transactions () {
  const [transactions, setTransactions] = useAtom(transactionsAtom)

  useEffect(() => {
    async function loadTransactions() {
      const response = await fetch('http://localhost:3333/transactions')
      const data = await response.json()

     setTransactions(data)
    }

    loadTransactions()
  })

  return (
    <div>
      <Header />
      <Summary />

    <main className={mainStyle}>
      <SearchForm />

      <table className={tableStyle}>
        <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
              <td className={tdStyle}>{transaction.description}</td>
              <td className={tdStyle}>
                <PriceHighLight variant={transaction.type}>
                    {transaction.price}
                  </PriceHighLight>
              </td>
              <td className={tdStyle}>{transaction.category}</td>
              <td className={tdStyle}>{transaction.createdAt}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
      </main>
    </div>
  )
}