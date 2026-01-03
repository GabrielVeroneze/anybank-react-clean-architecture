export interface TransactionRepository {
    create(value: number, typeId: number, userId: string): Promise<void>
}
