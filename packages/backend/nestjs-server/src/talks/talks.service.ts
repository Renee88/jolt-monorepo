import {HttpException, HttpStatus, Injectable, NotFoundException} from "@nestjs/common";
import {Talk} from "./talk.model";
import {v4 as uuidv4} from 'uuid'

@Injectable()
export class TalksService {
    private talks: Talk[] = require('../../../Data/Talks.json');

    getTalks() {
        return [...this.talks]
    }

    getTalk(id: string): Talk {
        const talk = this.findTalk(id)[0];
        return {...talk}
    }

    addTalk(name: string, transcript: string) {
        const talkId = uuidv4();
        const newTalk = new Talk(name, transcript, talkId);

        if(!name || !transcript){
            throw new HttpException({
                data: newTalk,
                success: false,
                errorCode: HttpStatus.BAD_REQUEST,
                error: 'Make sure you fill in all the details: talk name, content'
            }, HttpStatus.BAD_REQUEST)
        }

        this.talks.push(newTalk);
        return talkId
    }

    deleteTalk(id:string){
        const talkIndex = this.findTalk(id)[1];
        this.talks.splice(talkIndex,1)
    }

    findTalk(id: string): [Talk, number] {
        const talkIndex = this.talks.findIndex(talk => talk.id === id);
        const talk = this.talks[talkIndex];

        if(talkIndex === -1){
            throw new HttpException({
                data: talk,
                success: false,
                errorCode: HttpStatus.NOT_FOUND,
                error: 'Room not found'
            }, HttpStatus.NOT_FOUND)

        }

        return [talk, talkIndex]

    }
}