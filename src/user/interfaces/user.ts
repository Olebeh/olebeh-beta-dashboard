import { User } from 'src/utils/typeorm/entities/User'
import { UserDetails } from 'src/utils/types'

export interface IUserService {
    createUser(userId: UserDetails): Promise<User>
    findUser(userId: string): Promise<User | undefined>
}