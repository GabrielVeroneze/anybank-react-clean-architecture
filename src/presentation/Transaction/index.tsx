import { formatDatePtBR } from '@/utils/formatDate'
import { formatToBRL } from '@/utils/currencyFormatter'
import {
    TransactionAmount,
    TransactionDate,
    TransactionInfo,
    TransactionType,
    TransactionWrapper,
} from './styles'
import type { TransactionData } from '@/types/TransactionData'

interface TransactionProps {
    transaction: TransactionData
}

const Transaction = ({ transaction }: TransactionProps) => {
    const { value, type, date } = transaction
    const formattedDate = formatDatePtBR(date)
    const formattedValue = formatToBRL(value)

    return (
        <TransactionWrapper>
            <TransactionInfo>
                <TransactionType>{type}</TransactionType>
                <TransactionDate>{formattedDate}</TransactionDate>
            </TransactionInfo>
            <TransactionAmount>{formattedValue}</TransactionAmount>
        </TransactionWrapper>
    )
}

export default Transaction
