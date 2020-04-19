import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { Talk } from "./talk.model";
import { v4 as uuidv4 } from 'uuid';
const knex = require('../../data/db')


@Injectable()
export class TalksService {

    async getTalks(): Promise<Talk[]> {
        const talks = await knex.select('*').from('talks')
        return [...talks]
    }

    async getTalk(id: string): Promise<Talk> {
        const talk = await this.findTalk(id);
        return { ...talk }
    }

    async addTalk(name: string, transcript: string): Promise<{ id: string }> {
        const id = uuidv4();
        const newTalk = new Talk(id, name, transcript);

        if (!name || !transcript) {
            throw new HttpException({
                data: newTalk,
                success: false,
                errorCode: HttpStatus.BAD_REQUEST,
                error: 'Make sure you fill in all the details: talk name, content'
            }, HttpStatus.BAD_REQUEST)
        }

        await knex('talks').insert(newTalk)
        return { id }
    }

    async deleteTalk(id: string) {
        await knex('talks').where('id', id).del()
    }

    async findTalk(id: string): Promise<Talk> {
        const talk = await knex.select('*').from('talks').where('id', id)

        if (!talk[0]) {
            throw new HttpException({
                data: talk,
                success: false,
                errorCode: HttpStatus.NOT_FOUND,
                error: 'Room not found'
            }, HttpStatus.NOT_FOUND)

        }

        return talk[0]

    }
}