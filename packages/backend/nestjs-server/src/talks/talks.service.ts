import {Injectable, NotFoundException} from "@nestjs/common";
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
        const talk = new Talk(name, transcript, talkId);
        this.talks.push(talk);
        return talkId
    }

    deleteTalk(id:string){
        const talkIndex = this.findTalk(id)[1];
        this.talks.splice(talkIndex,1)
    }

    findTalk(id: string): [Talk, number] {
        const talkIndex = this.talks.findIndex(talk => talk.id === id);

        if(talkIndex === -1){
            throw new NotFoundException()
        }

        const talk = this.talks[talkIndex];
        return [talk, talkIndex]

    }
}