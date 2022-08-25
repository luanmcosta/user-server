import {User} from '@prisma/client'

export interface UsersRepository {
    create: (data: User) => Promise<User>;
    update: (data: User) => Promise<User>;
    delete: (id: string) => Promise<User>;
    getAll: () => Promise<User[]>;
    get: (id: string) => Promise<User | null>;
}