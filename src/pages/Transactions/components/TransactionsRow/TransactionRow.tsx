import { Transaction } from '../../atoms/transactionAtoms'
import { PriceHighLight, tdStyle } from '../../styles'

interface TransactionRowProps {
  transaction: Transaction
  dateFormatter: Intl.DateTimeFormat
  priceFormatter: Intl.NumberFormat
}

export function TransactionRow({ transaction, dateFormatter, priceFormatter }: TransactionRowProps) {
  const formattedDate = dateFormatter.format(new Date(transaction.createdAt))
  const formattedPrice = transaction.type === 'outcome' 
    ? `- ${priceFormatter.format(transaction.price)}`
    : priceFormatter.format(transaction.price)

  return (
    <tr key={transaction.id}>
      <td className={tdStyle}>{transaction.description}</td>
      <td className={tdStyle}>
        <PriceHighLight variant={transaction.type}>
          {formattedPrice}
        </PriceHighLight>
      </td>
      <td className={tdStyle}>{transaction.category}</td>
      <td className={tdStyle}>{formattedDate}</td>
    </tr>
  )
}