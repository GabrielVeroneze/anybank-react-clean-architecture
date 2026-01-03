import { groupTransactions } from '@/utils/groupTransactions'
import { Container, Heading, MonthLabel, TransactionsList } from './styles'
import type { Transaction } from '@/domain/entities/Transaction'
import TransactionItem from '@/presentation/TransactionItem'

interface StatementProps {
    allTransactions: Transaction[]
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
                            <TransactionItem
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
