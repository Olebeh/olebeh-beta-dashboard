import { Controller, Get, Post, UseGuards } from '@nestjs/common'
import { Routes } from 'src/utils/constants'
import { DiscordAuthGuard } from '../utils/Guards'

@Controller(Routes.Auth)
export class ControllerController {
    @Get('login')
    @UseGuards(DiscordAuthGuard)
    login() {}

    @Get('redirect')
    @UseGuards(DiscordAuthGuard)
    redirect() {}

    @Get('status')
    status() {}

    @Post('logout')
    logout() {}
}
