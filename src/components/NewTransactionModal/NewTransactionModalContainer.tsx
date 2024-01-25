import * as Dialog from '@radix-ui/react-dialog';
import { css } from '../../../styled-system/css';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { TransactionTypeRadio } from './TransactionTypeRadio';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
});

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

const inputStyled = css({
  borderRadius: '6px',
  border: '0',
  background: '#121214',
  color: '#C4C4CC',
  p: '1rem',
  '&::placeholder': { color: '#7C7C8A' },
});

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  });

  async function handleCreateNewTransaction(data: newTransactionFormInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={css({ position: 'fixed', w: '100vw', h: '100vh', inset: '0', background: 'rgba(0, 0, 0, 0.75)' })} />
      <Dialog.Content className={css({ minW: '32rem', borderRadius: '6px', p: '2.5rem 3rem', background: '#202024', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' })}>
        <Dialog.Title>Nova transação</Dialog.Title>
        <Dialog.Close asChild className={css({ position: 'absolute', background: 'transparent', border: '0', top: '1.5rem', right: '1.5rem', cursor: 'pointer', color: '#7C7C8A', fontSize: '0' })}>
          <X size={24} />
        </Dialog.Close>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)} className={css({ mt: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' })}>
          <input className={inputStyled} type="text" placeholder='Descrição' required {...register('description')} />
          <input className={inputStyled} type="number" placeholder='Preço' required {...register('price', { valueAsNumber: true })} />
          <input className={inputStyled} type="text" placeholder='Categoria' required {...register('category')} />

          <RadioGroup.Root className={css({ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', mt: '0.5rem' })}>
            <TransactionTypeRadio variant="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeRadio>
            <TransactionTypeRadio variant="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeRadio>
          </RadioGroup.Root>

          <button
            disabled={isSubmitting}
            className={css({
              height: '58px',
              border: '0',
              background: '#00875F',
              color: '#fff',
              fontWeight: 'bold',
              padding: '0 1.25rem',
              borderRadius: '6px',
              mt: '1.5rem',
              cursor: 'pointer',
              '&:disabled': {
                opacity: '0.6',
                cursor: 'not-allowed',
              },
              '&:not(:disabled):hover': {
                background: '#015F43',
                transition: 'background-color 0.2s',
              },
            })}
            type='submit'
          >
            Cadastrar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}