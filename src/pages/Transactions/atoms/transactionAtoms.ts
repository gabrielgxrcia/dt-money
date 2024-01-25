import axios from 'axios'
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
  async (get, set, query: string = '') => {
    const response = await axios.get('http://localhost:3333/transactions')
    if (response.data !== null) {
      const transactions = response.data as Transaction[]
      if (query) {
        const filteredTransactions = transactions.filter(transaction =>
          transaction.description.toLowerCase().includes(query.toLowerCase())
        )
        set(transactionsAtom, filteredTransactions)
      } else {
        set(transactionsAtom, transactions)
      }
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