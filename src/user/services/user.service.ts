import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/utils/typeorm/entities/User'
import { UserDetails } from 'src/utils/types'
import { Repository } from 'typeorm'
import { IUserService } from '../interfaces/user'

@Injectable()
export class UserService implements IUserService {
    constructor (@InjectRepository(User) private readonly userRepository: Repository<User>) {

    }

    createUser(details: UserDetails) {
        console.log('Create user')
        const newUser = this.userRepository.create(details)
        return this.userRepository.save(newUser)
    }

    findUser(userId: string) {
        console.log('Find user')
        return this.userRepository.findOne({ where: { userId } })
    }
}