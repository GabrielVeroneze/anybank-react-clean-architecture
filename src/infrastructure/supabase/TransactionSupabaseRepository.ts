import type { TransactionRepository } from '@/domain/repositories/TransactionRepository'
import { supabase } from './config'

export class TransactionSupabaseRepository implements TransactionRepository {
    async create(value: number, typeId: number, userId: string) {
        const { error } = await supabase
            .from('transaction')
            .insert([
                { value: value, transaction_type_id: typeId, user_id: userId },
            ])
            .select()

        if (error) {
            throw new Error(error.message)
        }
    }
}
