import { formatDatePtBR } from '@/utils/formatDate'
import { Card, DateWrapper, GreetingWrapper, Heading } from './styles'
import Balance from '@/presentation/Balance'

const Account = () => {
    return (
        <Card>
            <GreetingWrapper>
                <DateWrapper>{formatDatePtBR(new Date())}</DateWrapper>
                <Heading>Olá, Joana! :)</Heading>
            </GreetingWrapper>
            <div>
                <Balance value={2500} />
            </div>
        </Card>
    )
}

export default Account
