import { ISession } from 'connect-typeorm'
import { Column, Entity, PrimaryColumn, Index } from 'typeorm'

@Entity()
export class Session implements ISession {
    @PrimaryColumn('varchar', { length: 255 })
    id = ''

    @Index()
    @Column('bigint')
    expiredAt: number

    @Column('text')
    json = ''
}