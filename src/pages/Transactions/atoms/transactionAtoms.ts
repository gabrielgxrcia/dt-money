import { atom, useAtom } from 'jotai'
import { useEffect } from 'react'
import { api } from '../../../lib/axios'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
}

export const transactionsAtom = atom<Transaction[]>([])

export const loadTransactionsAtom = atom(
  null,
  async (_get, set, query: string = '') => {
    const response = await api.get('/transactions', {
      params: {
        _sort: '-createdAt',
      },
    })
    if (response.data !== null) {
      const transactions = response.data as Transaction[]
      if (query) {
        const filteredTransactions = transactions.filter((transaction) =>
          transaction.description.toLowerCase().includes(query.toLowerCase()),
        )
        set(transactionsAtom, filteredTransactions)
      } else {
        set(transactionsAtom, transactions)
      }
    }
  },
)

export function useTransactions() {
  const [transactions, setTransactions] = useAtom(transactionsAtom)
  const [, loadTransactions] = useAtom(loadTransactionsAtom)

  async function createTransaction(data: CreateTransactionInput) {
    const { description, price, category, type } = data

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    loadTransactions()
  }, [loadTransactions])

  return { transactions, setTransactions, loadTransactions, createTransaction }
}
