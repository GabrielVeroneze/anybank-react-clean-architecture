import { calculateBalance } from '@/utils/calculateBalance'
import { formatDatePtBR } from '@/utils/formatDate'
import { Card, DateWrapper, GreetingWrapper, Heading } from './styles'
import type { Transaction } from '@/domain/entities/Transaction'
import Balance from '@/presentation/Balance'

interface AccountProps {
    transactions: Transaction[]
}

const Account = ({ transactions }: AccountProps) => {
    const saldo = calculateBalance(transactions)

    return (
        <Card>
            <GreetingWrapper>
                <DateWrapper>{formatDatePtBR(new Date())}</DateWrapper>
                <Heading>Olá, Joana! :)</Heading>
            </GreetingWrapper>
            <div>
                <Balance value={saldo} />
            </div>
        </Card>
    )
}

export default Account
