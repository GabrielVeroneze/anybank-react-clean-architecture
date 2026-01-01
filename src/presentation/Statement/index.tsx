import { Container, Heading, MonthLabel, TransactionsList } from './styles'
import type { TransactionData } from '@/types/TransactionData'
import Transaction from '@/presentation/Transaction'

const groupTransactions = (
    transactions: TransactionData[],
): Record<string, TransactionData[]> => {
    return transactions.reduce<Record<string, TransactionData[]>>(
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

interface StatementProps {
    allTransactions: TransactionData[]
}

const Statement = ({ allTransactions }: StatementProps) => {
    const grouped = groupTransactions(allTransactions)

    return (
        <Container>
            <Heading>Extrato</Heading>
            <TransactionsList>
                {Object.entries(grouped).map(([monthYear, transactions]) => (
                    <div key={monthYear}>
                        <MonthLabel>{monthYear}</MonthLabel>
                        {transactions.map((transaction) => (
                            <Transaction
                                key={transaction.id}
                                transaction={transaction}
                            />
                        ))}
                    </div>
                ))}
            </TransactionsList>
        </Container>
    )
}

export default Statement
