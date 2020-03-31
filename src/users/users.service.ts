import {HttpException, HttpStatus, Injectable, NotFoundException} from "@nestjs/common";
import {User} from "./user.model";
import {v4 as uuidv4} from 'uuid'

@Injectable()
export class UsersService {
    private users: User[] = require('../../../Data/Users.json');

    getUsers() {
        return [...this.users]
    }

    getUser(id: string): User {
        const [user] = this.findUser(id) ;
        return {...user}
    }

    addUser( name: string, picture: string, email: string, age: number, dogs: any[]){
        const userId = uuidv4() ;
        const newUser = new User(userId ,name, picture, email, age, dogs);

        if(!name || !email){
            throw new HttpException({
                data: newUser,
                success: false,
                errorCode: HttpStatus.BAD_REQUEST,
                error: 'Make sure you fill in all the details: user name, valid email'
            }, HttpStatus.BAD_REQUEST)
        }

        this.users.push(newUser) ;

        return {id: userId}
    }

    removeUser(id: string){
        const userIndex = this.findUser(id)[1] ;
        this.users.splice(userIndex, 1)
    }

    findUser(id: string): [User, number]{
        const userIndex = this.users.findIndex(user => user.id === id);
        const user = this.users[userIndex] ;

        if(userIndex === -1){
            throw new HttpException({
                data: user,
                success: false,
                errorCode: HttpStatus.NOT_FOUND,
                error: 'User not found'
            }, HttpStatus.NOT_FOUND)

        }

        return [user, userIndex]
    }
}