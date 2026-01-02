import type { TransactionType } from '@/domain/entities/TransactionType'

export interface TransactionTypeRepository {
    listAll: () => Promise<TransactionType[]>
}
