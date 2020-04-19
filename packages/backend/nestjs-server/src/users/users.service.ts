import {HttpException, HttpStatus, Injectable, NotFoundException} from "@nestjs/common";
import {User} from "./user.model";
import {v4 as uuidv4} from 'uuid';
const knex = require('../../data/db');

@Injectable()
export class UsersService {

    async getUsers(): Promise<User[]> {
        const users: User[] = await knex.select('*').from('jolters') ;
        return [...users]
    }

    async getUser(id: string): Promise<User> {
        const user = await this.findUser(id) ;
        return user
    }

    async addUser( name: string, picture: string, email: string, age: number): Promise<{id: string}>{
        const id = uuidv4() ;
        const newUser = new User(id ,name, picture, email, age) ;

        if(!name || !email){
            throw new HttpException({
                data: newUser,
                success: false,
                errorCode: HttpStatus.BAD_REQUEST,
                error: 'Make sure you fill in all the details: user name, valid email'
            }, HttpStatus.BAD_REQUEST)
        }

        await knex('jolters').insert(newUser)
        return {id}
    }

    async removeUser(id: string){
        await knex('jolters').where('id',id).del()
    }

    async findUser(id: string): Promise<User>{
        const user : [User, number] = await knex.select('*').from('jolters').where('id', id) ;

        if(!user[0]){
            throw new HttpException({
                data: user,
                success: false,
                errorCode: HttpStatus.NOT_FOUND,
                error: 'User not found'
            }, HttpStatus.NOT_FOUND)

        }

        return user[0]
    }
}