import { Controller, Get, Post, Body, Delete, Param, Put } from "@nestjs/common";
import { SessionRequestsService } from "./sessionRequests.service";
import { APIResponse, Data } from "../types/responsesTypes";

@Controller('session-requests')
export class SessionRequestsController {

    constructor(private readonly SessionRequestsService: SessionRequestsService) {
    }

    @Get()
    async getSessionRequests(): Promise<APIResponse<Data[]>> {
        return {
            data: await this.SessionRequestsService.getSessionRequests(),
            success: true
        }
    }

    @Get(':id')
    async getSessionRequest(
        @Param('id') id: string
    ): Promise<APIResponse<Data>> {
        const sessionRequest = await this.SessionRequestsService.getSessionRequest(id)
        return {
            data: sessionRequest,
            success: true
        }
    }

    @Post()
    async addSessionRequest(
        @Body('talkID') talkID: string,
        @Body('jolterID') jolterID: string,
        @Body('roomID') roomID: string,
        @Body('hour') hour: string,
        @Body('date') date: string, 
        @Body('status') status: string
    ): Promise<APIResponse<Data>> {
        const session = { talkID, jolterID, roomID, hour, date, status }
        const {id} = await this.SessionRequestsService.addSessionRequest(session)
        return {
            data: {id} ,
            success: true
        }

    }

    @Delete(':id')
    async deleteSessionRequest(
        @Param('id') sessionID: string
    ): Promise<APIResponse<Data>> {
        const {id} = await this.SessionRequestsService.deleteSessionRequest(sessionID)
        return {
            data: {id},
            success: true
        }
    }

    @Put()
    async updateSessionRequestStatus(
        @Body('id') id: string,
        @Body('status') status: string
    ): Promise<APIResponse<Data>> {
        await this.SessionRequestsService.updateSessionRequestStatus(status, id)
        return {
            data: {id} ,
            success: true
        }
    }
}