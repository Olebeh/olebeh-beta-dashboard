import { Module } from '@nestjs/common'
import { UserModule } from 'src/user/user.module'
import { Services } from 'src/utils/constants'
import { ControllerController } from './controllers/auth.controller'
import { AuthService } from './services/auth.service'
import { DiscordStrategy } from './utils/DiscordStrategy'
import { SessionSerializer } from './utils/SessionsSerializer'

@Module({
    imports: [UserModule],
    controllers: [ControllerController],
    providers: [
        DiscordStrategy,
        SessionSerializer,
        {
            provide: Services.Auth,
            useClass: AuthService
        }
    ]
})
export class AuthModule {}
