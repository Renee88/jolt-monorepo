import { Controller, Put, Param, Get, Body, Post } from "@nestjs/common";
import { SessionsService } from "./sessions.service";
import { APIResponse, Data } from "../types/responsesTypes";

@Controller('sessions')
export class SessionsController {
    constructor(private readonly SessionsService: SessionsService) {
    }

    @Get()
    async getSessions(): Promise<APIResponse<Data[]>> {
        return {
            data: await this.SessionsService.getSessions(),
            success: true
        }
    }

    @Get(':id')
    async getSession(
        @Param('id') id: string
    ):
        Promise<APIResponse<Data>> {
        return {
            data: await this.SessionsService.getSession(id),
            success: true
        }
    }


    @Put()
    async updateSession(
        @Body('id') id: string,
        @Body('status') status: string
    ): Promise<APIResponse<Data>> {
        await this.SessionsService.updateSessionStatus(status, id)
        return {
            data: { id },
            success: true
        }
    }
}