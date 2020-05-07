import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./user.model";
import { APIResponse, Data } from "../types/responsesTypes";


@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) {
    }

    @Get()
    async getUsers(): Promise<APIResponse<Data[]>> {
        return {
            data: await this.UsersService.getUsers(),
            success: true
        }
    }

    @Get(':id')
    async getUser(
        @Param('id') id: string
    ):
        Promise<APIResponse<Data>> {
        return {
            data: await this.UsersService.getUser(id),
            success: true
        }
    }

    @Post()
    async addUser(
        @Body('name') name: string,
        @Body('picture') picture: string,
        @Body('email') email: string,
        @Body('age') age: number
    ):
        Promise<APIResponse<Data>> {
        const { id } = await this.UsersService.addUser(name, picture, email, age);
        return {
            data: { id },
            success: true
        }
    }

    @Delete(':id')
    async removeUser(
        @Param('id') id: string
    ):
        Promise<APIResponse<Data>> {
        await this.UsersService.removeUser(id);
        return {
            data: { id },
            success: true
        }
    }
}