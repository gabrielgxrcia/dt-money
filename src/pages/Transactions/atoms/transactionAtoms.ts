import { atom, useAtom } from 'jotai'
import { useEffect } from 'react'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export const transactionsAtom = atom<Transaction[]>([])

export const loadTransactionsAtom = atom(
  null,
  async (get, set) => {
    try {
      const response = await fetch('http://localhost:3333/transactions')
      const data = await response.json()
      set(transactionsAtom, data)
    } catch (error) {
      console.error('Failed to load transactions:', error)
    }
  }
)

export function useTransactions() {
  const [transactions, setTransactions] = useAtom(transactionsAtom)
  const [, loadTransactions] = useAtom(loadTransactionsAtom)

  useEffect(() => {
    loadTransactions()
  }, [loadTransactions])

  return { transactions, setTransactions, loadTransactions }
}