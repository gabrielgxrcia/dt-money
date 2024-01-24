import { css } from '../../../styled-system/css'
import { SummaryCard, SummaryCardLeave, SummaryCardTotal } from './SummaryCards/SummaryCard'

export function Summary () {
  return (
    <section className={css({ width: '100%', maxWidth: '1120px', m: '0 auto', p: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', mt: '-5rem'})}>
      <SummaryCard />
      <SummaryCardLeave />
      <SummaryCardTotal variant='green'/>
    </section>
  )
}