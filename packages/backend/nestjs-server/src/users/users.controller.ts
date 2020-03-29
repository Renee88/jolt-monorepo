import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {UsersService} from "./users.service";
import {User} from "./user.model";


@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) {
    }

    @Get()
    getUsers(): User[] {
        return this.UsersService.getUsers()
    }

    @Get(':id')
    getUser(
        @Param('id') id: string
    ) : User {
        return this.UsersService.getUser(id)
    }

    @Post()
    addUser(
        @Body('name') name: string,
        @Body('picture') picture: string,
        @Body('email') email: string,
        @Body('age') age: number,
        @Body('dogs') dogs?: any[]
    ): any {
        const {id} = this.UsersService.addUser(name, picture, email, age, dogs)
        return {id}
    }

    @Delete(':id')
    removeUser(
        @Param('id') id: string
    ) : any {
        this.UsersService.removeUser(id)
        return null
    }
}