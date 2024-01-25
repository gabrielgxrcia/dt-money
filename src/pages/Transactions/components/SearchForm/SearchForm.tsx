import { MagnifyingGlass } from "phosphor-react";
import { css } from "../../../../../styled-system/css";
import { useForm } from "react-hook-form";
import { useAtom } from 'jotai';
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { loadTransactionsAtom } from "../../atoms/transactionAtoms";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm () {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  const [, loadTransactions] = useAtom(loadTransactionsAtom);
  
  async function handleSearchTransactions(data: SearchFormInputs) {
    await loadTransactions(data.query);
  }

  return (
    <form 
      className={css({ display: 'flex', gap: '1rem' })}
      onSubmit={handleSubmit(handleSearchTransactions)}
    >
      <input 
        type='text'
        placeholder="Busque por transações" 
        {...register('query')}
        className={css({ 
          flex: '1', 
          borderRadius: '6px', 
          border: '0', 
          background: '#121214', 
          color: '#C4C4CC', 
          p: '1rem', 
          '&::placeholder': { color: '#7C7C8A' }
        })} 
      />
      
      <button 
        type="submit" 
        className={css({ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.75rem', 
          p: '1rem', 
          background: 'transparent', 
          border: '1px solid #00B37E', 
          color: '#00B373', 
          fontWeight: 'bold', 
          borderRadius: '6px', 
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
          opacity: isSubmitting ? 0.7 : 1,
          '&:hover': {
            background: isSubmitting ? 'transparent' : '#00875F',
            borderColor: isSubmitting ? '#00B37E' : '#00875F',
            color: isSubmitting ? '#00B373' : '#fff'
          }
        })}
        disabled={isSubmitting}
      >
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </form>
  )
}