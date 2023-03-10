import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm'
import { entities } from './utils/typeorm'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { PassportModule } from '@nestjs/passport'
import { Session } from './utils/typeorm/entities/Session'

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: '.env.development' }),
        PassportModule.register({ session: true }),
        TypeOrmModule.forFeature([Session]),
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: process.env.MONGO_URI,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            synchronize: true,
            database: 'myFirstDatabase',
            entities
        }),
        AuthModule,
        UserModule
    ],
    controllers: [],
    providers: []
})
export class AppModule {}