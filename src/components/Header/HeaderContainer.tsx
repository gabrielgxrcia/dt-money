import * as Dialog from '@radix-ui/react-dialog'
import { css } from '../../../styled-system/css'

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal/NewTransactionModalContainer'

export function Header () {
  return (
    <header className={css({ background: '#121214', p: '2.5rem 0 7.5rem' })}>
      <div className={css({ width: '100%', maxWidth: '1120px', m: '0 auto', p: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
        <img src={logoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className={css({ height: '50px', border: '0', background: '#00875F', color: '#fff',  fontWeight: 'bold', p: '0 1.25rem', borderRadius: '6px', cursor: 'pointer', '&:hover': { background: '#015F43', transition: 'background-color 0.3s' }})} type="button">
              Nova transação
            </button> 
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </div>
    </header>
  )
}