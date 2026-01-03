import type { TransactionRepository } from '@/domain/repositories/TransactionRepository'

export class ListAllTransactions {
    private transactionRepository: TransactionRepository

    constructor(transactionRepository: TransactionRepository) {
        this.transactionRepository = transactionRepository
    }

    async execute() {
        return this.transactionRepository.listAll()
    }
}
