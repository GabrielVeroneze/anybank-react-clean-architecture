import type { User } from '@/domain/entities/User'
import type { UserRepository } from '@/domain/repositories/UserRepository'

export class CreateUser {
    private userRepository: UserRepository

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    async execute(user: Omit<User, 'id'>) {
        this.userRepository.createUser(user)
    }
}
