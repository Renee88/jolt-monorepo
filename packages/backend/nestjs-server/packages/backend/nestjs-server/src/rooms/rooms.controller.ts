import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { RoomsService } from "./rooms.service";
import { APIResponse, Data } from "../types/responsesTypes";

@Controller('rooms')
export class RoomsController {
    constructor(private readonly RoomsService: RoomsService) {
    }

    @Get()
    async getRooms(): Promise<APIResponse<Data[]>> {
        return {
            data: await this.RoomsService.getRooms(),
            success: true
        }
    }

    @Get(':id')
    async getRoom(
        @Param('id') roomId: string
    ): Promise<APIResponse<Data>> {
        return {
            data: await this.RoomsService.getRoom(roomId),
            success: true
        }
    }

    @Post()
    async addRoom(
        @Body('name') roomName: string,
        @Body('talk') talk: string,
        @Body('jolter') jolter: string
    ): Promise<APIResponse<Data>> {
        const { id } = await this.RoomsService.addRoom(roomName, talk, jolter);
        return {
            data: { id },
            success: true
        }
    }

    @Delete(':id')
    deleteRoom(
        @Param('id') roomId: string
    ): APIResponse<string> {
        this.RoomsService.deleteRoom(roomId)
        return {
            data: roomId,
            success: true
        }
    }

}