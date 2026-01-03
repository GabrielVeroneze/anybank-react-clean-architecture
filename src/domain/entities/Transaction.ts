import type { TransactionType } from '@/domain/entities/TransactionType'

export interface Transaction {
    id: number
    value: number
    type: TransactionType
    date: Date
}
