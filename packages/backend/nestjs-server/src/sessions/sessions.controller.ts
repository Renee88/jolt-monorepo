import { Controller, Put, Param, Get, Body } from "@nestjs/common";
import { SessionsService } from "./sessions.service";
import { APIResponse, Data } from "../types/responsesTypes";

@Controller('sessions')
export class SessionsController {
    constructor(private readonly SessionsService: SessionsService){
    }

    @Get()
    getSessions(): APIResponse<Data[]>{
        return {
            data: this.SessionsService.getSessions(),
            success: true
        }
    }

    @Put()
    updateSession(
        @Body('id') sessionID: string,
        @Body('status') status: string
    ): APIResponse<Data[]>{
        return {
            data: this.SessionsService.updateSessionStatus(status,sessionID),
            success: true
        }
    }
}