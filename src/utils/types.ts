import { User } from "./typeorm/entities/User"

export type UserDetails = {
    userId: string
}

export type Done = (err: Error, user: User) => void