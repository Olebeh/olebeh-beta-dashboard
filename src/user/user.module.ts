import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Services } from 'src/utils/constants'
import { User } from 'src/utils/typeorm/entities/User'
import { UserService } from './services/user.service'

@Module({
    imports: [
        TypeOrmModule.forFeature([User])
    ],
    providers: [
        {
            provide: Services.User,
            useClass: UserService
        }
    ],
    exports: [
        {
            provide: Services.User,
            useClass: UserService
        }
    ]
})
export class UserModule {}
