import { formatDatePtBR } from '@/utils/formatDate'
import { formatToBRL } from '@/utils/currencyFormatter'
import {
    TransactionAmount,
    TransactionDate,
    TransactionInfo,
    TransactionType,
    TransactionWrapper,
} from './styles'
import type { Transaction } from '@/domain/entities/Transaction'

interface TransactionItemProps {
    transaction: Transaction
}

const TransactionItem = ({ transaction }: TransactionItemProps) => {
    const { value, type, date } = transaction
    const formattedDate = formatDatePtBR(date)
    const formattedValue = formatToBRL(value)

    return (
        <TransactionWrapper>
            <TransactionInfo>
                <TransactionType>{type.display}</TransactionType>
                <TransactionDate>{formattedDate}</TransactionDate>
            </TransactionInfo>
            <TransactionAmount>{formattedValue}</TransactionAmount>
        </TransactionWrapper>
    )
}

export default TransactionItem
