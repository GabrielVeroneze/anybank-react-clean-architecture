import type { TransactionRepository } from '@/domain/repositories/TransactionRepository'
import type { Transaction } from '@/domain/entities/Transaction'
import { supabase } from './config'

export class TransactionSupabaseRepository implements TransactionRepository {
    async create(value: number, typeId: number, userId: string) {
        const { data, error } = await supabase
            .from('transaction')
            .insert([
                { value: value, transaction_type_id: typeId, user_id: userId },
            ]).select(`
                *,
                transaction_type (id, display)
            `)

        if (error) {
            throw new Error(error.message)
        }

        return {
            id: data[0].id,
            value: data[0].value,
            type: data[0].transaction_type,
            date: new Date(data[0].created_at),
        }
    }

    async listAll() {
        const { data, error } = await supabase.from('transaction').select(`
            *,
            transaction_type (id, display)
        `)

        if (error) {
            throw new Error(error.message)
        }

        const result: Transaction[] = data.map((row) => ({
            id: row.id,
            value: row.value,
            type: row.transaction_type,
            date: new Date(row.created_at),
        }))

        return result
    }
}
