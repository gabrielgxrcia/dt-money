import * as Dialog from '@radix-ui/react-dialog'
import { css } from '../../../styled-system/css'
import { X } from 'phosphor-react'

const inputStyled = css({ borderRadius: '6px', border: '0', background: '#121214', color: '#C4C4CC', p: '1rem', '&::placeholder': { color: '#7C7C8A' }})

export function NewTransactionModal () {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={css({ position: 'fixed', w: '100vw', h: '100vh', inset: '0', background: 'rgba(0, 0, 0, 0.75)' })} />
      <Dialog.Content className={css({ minW: '32rem', borderRadius: '6px', p: '2.5rem 3rem', background: '#202024', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' })}>
        <Dialog.Title> Nova transação </Dialog.Title>
          <Dialog.Close asChild className={css({ position: 'absolute', background: 'transparent', border: '0', top: '1.5rem', right: '1.5rem', cursor: 'pointer', color: '#7C7C8A', fontSize: '0' })}>
            <X size={24}/>
          </Dialog.Close>
        <form action="" className={css({ mt: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' })}>
          <input className={inputStyled} type="text"  placeholder='Descrição' required />
          <input className={inputStyled} type="number" placeholder='Preço' required />
          <input className={inputStyled} type="text" placeholder='Categoria' required />
          <button className={css({ height: '58px', border: '0', background: '#00875F', color: '#fff', fontWeight: 'bold', padding: '0 1.25rem', borderRadius: '6px', mt: '1.5rem', cursor: 'pointer', '&:hover': { background: '#015F43', transition: 'background-color 0.2s' }})} type='submit'>Cadastrar</button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}