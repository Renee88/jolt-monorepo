import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {UsersService} from "./users.service";
import {User} from "./user.model";
import {APIResponse, Data} from "../responsesTypes";


@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) {
    }

    @Get()
    getUsers(): APIResponse<Data[]> {
        return {
            data: this.UsersService.getUsers(),
            success: true
        }
    }

    @Get(':id')
    getUser(
        @Param('id') id: string
    ):
        APIResponse<Data> {
        return {
            data: this.UsersService.getUser(id),
            success: true
        }
    }

    @Post()
    addUser(
        @Body('name') name: string,
        @Body('picture') picture: string,
        @Body('email') email: string,
        @Body('age') age: number,
        @Body('dogs') dogs?: any[]
    ):
        APIResponse<Data> {
        const {id} = this.UsersService.addUser(name, picture, email, age, dogs);
        return {
            data: {id},
            success: true
        }


    }

    @Delete(':id')
    removeUser(
        @Param('id')
            userId: string
    ):
        APIResponse<Data> {
        this.UsersService.removeUser(userId);
        return {
            data: {id: userId},
            success: true
        }
    }
}