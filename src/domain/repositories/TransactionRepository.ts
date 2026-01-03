import type { Transaction } from '@/domain/entities/Transaction'

export interface TransactionRepository {
    create(value: number, typeId: number, userId: string): Promise<void>
    listAll(): Promise<Transaction[]>
}
