import { Injectable, Inject } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport/dist'
import { Profile, Strategy } from 'passport-discord'
import { Services } from 'src/utils/constants'
import { IAuthService } from '../interfaces/auth'

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy) {
    constructor (@Inject(Services.Auth) private readonly authService: IAuthService) {
        super({
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: process.env.REDIRECT_URL,
            scope: ['identify', 'email', 'guilds']
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        console.log('DiscordStrategy Validate Method')
        console.log(profile.username)
        return this.authService.validateUser({ userId: profile.id })
    }
}