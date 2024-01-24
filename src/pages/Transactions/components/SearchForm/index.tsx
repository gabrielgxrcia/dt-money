import { MagnifyingGlass } from "phosphor-react";
import { css } from "../../../../../styled-system/css";

export function SearchForm () {
  return (
    <form className={css({ display: 'flex', gap: '1rem' })}>
      <input type='text' placeholder="Busque por transações" className={css({ flex: '1', borderRadius: '6px', border: '0', background: '#121214', color: '#C4C4CC', p: '1rem', '&::placeholder': { color: '#7C7C8A' }})} />
      <button type="submit" className={css({ display: 'flex', alignItems: 'center', gap: '0.75rem', p: '1rem', background: 'transparent', border: '1px solid #00B37E', color: '#00B373', fontWeight: 'bold', borderRadius: '6px', transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
      '&:hover': {
      background: '#00875F',
      borderColor: '#00875F',
      color: '#fff'
      }})}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </form>
  )
}