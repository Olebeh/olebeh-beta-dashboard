import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Session } from './utils/typeorm/entities/Session'
import * as session from 'express-session'
import * as passport from 'passport'
import { getRepositoryToken } from '@nestjs/typeorm'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.setGlobalPrefix('api')

    app.use(
        session({
            secret: process.env.COOKIE_SECRET,
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24
            },
            store: app.get(getRepositoryToken(Session), { strict: false })
        })
    )

    app.use(passport.initialize())
    app.use(passport.session())

    try {
        await app.listen(process.env.PORT)
        console.log(`Running on port ${process.env.PORT}`)
    } catch (e) {
        console.log(e)
    }
}

bootstrap()