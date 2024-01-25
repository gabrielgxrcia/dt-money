import { atom } from 'jotai'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export const transactionsAtom = atom<Transaction[]>([])