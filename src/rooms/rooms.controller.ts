import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {RoomsService} from "./rooms.service";
import {APIResponse, Data} from "../types/responsesTypes";

@Controller('rooms')
export class RoomsController {
    constructor(private readonly RoomsService: RoomsService) {
    }

    @Get()
    getRooms(): APIResponse<Data[]> {
        return {
            data: this.RoomsService.getRooms(),
            success: true
        }
    }

    @Get(':id')
    getRoom(
        @Param('id') roomId: string
    ): APIResponse<Data> {
        return {
            data: this.RoomsService.getRoom(roomId),
            success: true
        }
    }

    @Post()
    addRoom(
        @Body('name') roomName: string,
        @Body('talk') talk: string,
        @Body('jolter') jolter: string
    ): APIResponse<Data> {
        const id = this.RoomsService.addRoom(roomName, talk, jolter);
        return {
            data: {id},
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