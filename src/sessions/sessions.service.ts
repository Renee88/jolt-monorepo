import { Injectable, HttpStatus, HttpException } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import type { Session } from '../types/SessionType'
import {Session as SessionModel} from './sessions.model'
const knex = require('../../data/db')

@Injectable()
export class SessionsService {

    async getSessions(): Promise<Session[]> {
        const sessions = await knex.select('*').from('sessions')
        return [...sessions]
    }

    async getSession(id): Promise<Session>{
        const session = await this.findSession(id)
        return session
    }

    async addSession(status, sessionRequestID): Promise<{ id: string }> {
        const id = uuidv4()
        const session = new SessionModel(id, sessionRequestID, status)

        if (!session.sessionRequestID || !session.status) {
            throw new HttpException({
                data: session,
                success: false,
                errorCode: HttpStatus.BAD_REQUEST,
                error: 'Make sure you fill in all the necessary details'
            }, HttpStatus.BAD_REQUEST)

        }

        const newSession = await knex('sessions').insert(session)
        console.log(newSession)
        return { id }
    }

    async updateSessionStatus(status, id) {
        await knex('sessions').where('id', id).update({status})
    }

    async findSession(id): Promise<Session> {
       const session = await knex.select('*').where('id', id)

        if (!session[0]) {
            throw new HttpException({
                data: session,
                success: false,
                errorCode: HttpStatus.NOT_FOUND,
                error: 'No matching result'
            }, HttpStatus.NOT_FOUND)
        }

        return session[0]
    }
}