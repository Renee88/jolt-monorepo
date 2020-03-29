import {Injectable, NotFoundException} from "@nestjs/common";
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
        this.users.push(newUser) ;

        return {id: userId}
    }

    removeUser(id: string){
        const userIndex = this.findUser(id)[1] ;
        this.users.splice(userIndex, 1)
    }

    findUser(id: string): [User, number]{
        const userIndex = this.users.findIndex(user => user.id === id);

        if(userIndex === -1){
            throw new NotFoundException()
        }

        const user = this.users[userIndex] ;
        return [user, userIndex]
    }
}