import type { TransactionTypeRepository } from '@/domain/repositories/TransactionTypeRepository'
import { supabase } from './config'

export class TransactionTypeSupabaseRepository implements TransactionTypeRepository {
    async listAll() {
        const { data, error } = await supabase
            .from('transaction_type')
            .select('*')

        if (error) {
            throw new Error(error.message)
        }

        return data ?? []
    }
}
