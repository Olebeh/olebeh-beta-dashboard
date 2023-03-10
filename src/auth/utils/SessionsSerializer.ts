import { Inject } from '@nestjs/common/decorators'
import { PassportSerializer } from '@nestjs/passport'
import { IUserService } from 'src/user/interfaces/user'
import { Services } from 'src/utils/constants'
import { User } from 'src/utils/typeorm/entities/User'
import { Done } from 'src/utils/types'

export class SessionSerializer extends PassportSerializer {
    constructor (@Inject(Services.User) private readonly userService: IUserService) {
        super()
    }

    serializeUser(user: User, done: Done) {
        done(null, user)
    }

    async deserializeUser(user: User, done: Function) {
        try {
            const userDB = await this.userService.findUser(user.userId)
            return userDB ? done(null, userDB) : done(null, null)
        } catch (err) {
            return done(err, null)
        }
    }
}