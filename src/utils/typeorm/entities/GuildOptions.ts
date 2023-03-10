import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'guild-options' })
export class GuildOptions {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ unique: true })
    guildId: string
}