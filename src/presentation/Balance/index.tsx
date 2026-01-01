import { IconEye } from '@/components/Icons'
import { formatToBRL } from '@/utils/currencyFormatter'
import { StyledBalance } from './styles'

interface BalanceProps {
    value: number
}

const Balance = ({ value }: BalanceProps) => {
    return (
        <StyledBalance>
            <h3>
                Saldo
                <IconEye />
            </h3>
            <p>Conta Corrente</p>
            <strong>{formatToBRL(value)}</strong>
        </StyledBalance>
    )
}

export default Balance
