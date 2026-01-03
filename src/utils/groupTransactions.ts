import type { Transaction } from '@/domain/entities/Transaction'

export const groupTransactions = (
    transactions: Transaction[],
): Record<string, Transaction[]> => {
    return transactions.reduce<Record<string, Transaction[]>>(
        (acc, transaction) => {
            const monthName = transaction.date.toLocaleString('pt-BR', {
                month: 'long',
            })
            const year = transaction.date.getFullYear()
            const key = `${monthName} ${year}`

            if (!acc[key]) {
                acc[key] = []
            }

            acc[key].push(transaction)
            return acc
        },
        {},
    )
}
