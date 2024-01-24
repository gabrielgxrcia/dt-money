import { PriceHighLight, mainStyle, tableStyle, tdStyle } from './styles'
import { Header } from '../../components/Header/Header'
import { Summary } from '../../components/Summary'

export function Transactions () {
  return (
    <div>
      <Header />
      <Summary />

    <main className={mainStyle}>
      <table className={tableStyle}>
        <tbody>
          <tr>
            <td className={tdStyle}>Desenvolvimento de site</td>
            <td className={tdStyle}>
              <PriceHighLight variant="income">
                R$ 12.000,00
                </PriceHighLight>
            </td>
            <td className={tdStyle}>Venda</td>
            <td className={tdStyle}>24/01/2024</td>
          </tr>
          <tr>
          <td className={tdStyle}>Hamburguer</td>
          <td className={tdStyle}>
               <PriceHighLight variant="outcome">
                - R$ 59,00
                </PriceHighLight>
          </td>
          <td className={tdStyle}>Alimentação</td>
          <td className={tdStyle}>22/01/2024</td>
          </tr>
        </tbody>
      </table>
      </main>
    </div>
  )
}