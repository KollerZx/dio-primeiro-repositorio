import User from '../../Entities/User'
export interface IUserRepositorys{
    findAllUsers() : Promise<User[]>
    findUserById(uuid: string): Promise<User | null>
    createUser(username: string, password: string): Promise<string>
    updateUser(uuid: string, username: string, password: string): Promise<void>
    removeUser(uuid: string): Promise<void>
    findByUsernameAndPassword(username: string, password: string): Promise<User | null>
}