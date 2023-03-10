import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'web-users' })
export class User {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ unique: true })
    userId: string
}