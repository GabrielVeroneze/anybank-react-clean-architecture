import type { User } from '@/domain/entities/User'

export interface UserRepository {
    createUser(user: Omit<User, 'id'>): Promise<void>
}
