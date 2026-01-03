import type { TransactionRepository } from '@/domain/repositories/TransactionRepository'

export class CreateTransaction {
    private transactionRepository: TransactionRepository

    constructor(transactionRepository: TransactionRepository) {
        this.transactionRepository = transactionRepository
    }

    execute(value: number, typeId: number, userId: string) {
        this.transactionRepository.create(value, typeId, userId)
    }
}
