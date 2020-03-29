import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {TalksService} from "./talks.service";
import {Talk} from "./talk.model";

@Controller('talks')
export class TalksController {
    constructor(private readonly TalksService: TalksService) {
    }

    @Get()
    getTalks(): Talk[]{
        return this.TalksService.getTalks()
    }

    @Get(':id')
    getTalk(
        @Param('id') talkId: string
    ): Talk {
        return this.TalksService.getTalk(talkId)
    }

    @Post()
    addTalk(
        @Body('name') talkName: string,
        @Body('transcript') transcript: string
    ): {id: string} {
        const talkId = this.TalksService.addTalk(talkName, transcript);
        return {id: talkId}
    }

    @Delete(':id')
    deleteTalk(
        @Param('id') talkId: string
    ){
        this.TalksService.deleteTalk(talkId);
        return null
    }

}