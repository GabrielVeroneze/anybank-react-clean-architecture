import type { TransactionTypeRepository } from '@/domain/repositories/TransactionTypeRepository'

export class ListTransactionType {
    private transactionTypeRepository: TransactionTypeRepository

    constructor(transactionTypeRepository: TransactionTypeRepository) {
        this.transactionTypeRepository = transactionTypeRepository
    }

    async execute() {
        return this.transactionTypeRepository.listAll()
    }
}
