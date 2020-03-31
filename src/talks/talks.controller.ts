import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {TalksService} from "./talks.service";
import {Talk} from "./talk.model";
import {APIResponse, Data} from "../responsesTypes";

@Controller('talks')
export class TalksController {
    constructor(private readonly TalksService: TalksService) {
    }

    @Get()
    getTalks(): APIResponse<Data[]> {
        return {
            data: this.TalksService.getTalks(),
            success: true
        }
    }

    @Get(':id')
    getTalk(
        @Param('id') talkId: string
    ): APIResponse<Data> {
        return {
            data: this.TalksService.getTalk(talkId),
            success: true
        }
    }

    @Post()
    addTalk(
        @Body('name') talkName: string,
        @Body('transcript') transcript: string
    ): APIResponse<Data> {
        const talkId = this.TalksService.addTalk(talkName, transcript);
        return {
            data: {id: talkId},
            success: true
        }
    }

    @Delete(':id')
    deleteTalk(
        @Param('id')
            talkId: string
    ):
        APIResponse < Data > {
        this.TalksService.deleteTalk(talkId);
        return {
            data: {id: talkId},
            success: true
        }
    }

}

