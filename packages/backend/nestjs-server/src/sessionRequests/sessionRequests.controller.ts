import { Controller, Get, Post, Body, Delete, Param, Put } from "@nestjs/common";
import { SessionRequestsService } from "./sessionRequests.service";
import { APIResponse, Data } from "../types/responsesTypes";

@Controller('session-requests')
export class SessionRequestsController {

    constructor(private readonly SessionRequestsService: SessionRequestsService) {
    }

    @Get()
    getSessionRequests(): APIResponse<Data[]> {
        return {
            data: this.SessionRequestsService.getSessionRequests(),
            success: true
        }
    }

    @Get(':id')
    getSessionRequest(
        @Param('id') sessionID: string
    ): APIResponse<Data> {
        return {
            data: this.SessionRequestsService.getSessionRequest(sessionID),
            success: true
        }
    }

    @Post()
    addSessionRequest(
        @Body('talkID') talkID: string,
        @Body('jolterID') jolterID: string,
        @Body('roomID') roomID: string,
        @Body('hour') hour: string,
        @Body('date') date: string, 
        @Body('status') status: string
    ): APIResponse<Data[]> {
        const session = { talkID, jolterID, roomID, hour, date, status }
        return {
            data: this.SessionRequestsService.addSessionRequest(session),
            success: true
        }

    }

    @Delete(':id')
    deleteSessionRequest(
        @Param('id') sessionID: string
    ): APIResponse<Data[]> {
        return {
            data: this.SessionRequestsService.deleteSessionRequest(sessionID),
            success: true
        }
    }

    @Put()
    updateSessionRequestStatus(
        @Body('id') sessionID: string,
        @Body('status') status: string
    ): APIResponse<Data[]> {
        return {
            data: this.SessionRequestsService.updateSessionRequestStatus(status, sessionID),
            success: true
        }
    }
}