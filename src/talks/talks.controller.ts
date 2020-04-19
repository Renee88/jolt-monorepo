import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { TalksService } from "./talks.service";
import { APIResponse, Data } from "../types/responsesTypes";

@Controller('talks')
export class TalksController {
    constructor(private readonly TalksService: TalksService) {
    }

    @Get()
    async getTalks(): Promise<APIResponse<Data[]>> {
        return {
            data: await this.TalksService.getTalks(),
            success: true
        }
    }

    @Get(':id')
    async getTalk(
        @Param('id') talkId: string
    ): Promise<APIResponse<Data>> {
        return {
            data: await this.TalksService.getTalk(talkId),
            success: true
        }
    }

    @Post()
    async addTalk(
        @Body('name') talkName: string,
        @Body('transcript') transcript: string
    ): Promise<APIResponse<Data>> {
        const { id } = await this.TalksService.addTalk(talkName, transcript);
        return {
            data: { id },
            success: true
        }
    }

    @Delete(':id')
    async deleteTalk(
        @Param('id') id: string
    ):
        Promise<APIResponse<Data>> {
        await this.TalksService.deleteTalk(id);
        return {
            data: { id },
            success: true
        }
    }

}

