import { Inject, Injectable } from '@nestjs/common'
import { IUserService } from 'src/user/interfaces/user'
import { Services } from 'src/utils/constants'
import { UserDetails } from 'src/utils/types'
import { IAuthService } from '../interfaces/auth'

@Injectable()
export class AuthService implements IAuthService {
    constructor (@Inject(Services.User) private readonly userService: IUserService) {

    }

    async validateUser(details: UserDetails) {
        const user = await this.userService.findUser(details.userId)
        return user || this.userService.createUser({ userId: details.userId })
    }
}
