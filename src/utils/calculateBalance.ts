import type { Transaction } from '@/domain/entities/Transaction'

export const calculateBalance = (transactions: Transaction[]): number => {
    return transactions.reduce((acc, transaction) => {
        const isDeposit = transaction.type.display === 'Depósito'

        const value = isDeposit ? transaction.value : -transaction.value

        return acc + value
    }, 0)
}
