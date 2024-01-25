import { Transaction } from '../../atoms/transactionAtoms'
import { PriceHighLight, tdStyle } from '../../styles'

interface TransactionRowProps {
  transaction: Transaction
}

export function TransactionRow({ transaction }: TransactionRowProps) {
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
}