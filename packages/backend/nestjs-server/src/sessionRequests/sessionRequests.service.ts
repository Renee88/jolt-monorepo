import { Injectable, HttpStatus, HttpException } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { SessionsService } from "../sessions/sessions.service";
import type { SessionRequest } from "../types/SessionRequest";
import { SessionRequest as SessionRequestModel} from "./sessionRequest.model";
const knex = require('../../data/db')

@Injectable()
export class SessionRequestsService {

    constructor(private readonly SessionsService: SessionsService) { }

    async getSessionRequests(): Promise<SessionRequest[]> {
        const sessionRequests = await knex.select('*').from('session_requests')
        return [...sessionRequests]
    }

    async getSessionRequest(id): Promise<SessionRequest> {
        const session = await this.findSession(id)
        return session
    }

    async addSessionRequest(sessionRequest) {
        const id = uuidv4()
        const { jolterID, talkID, roomID, date, hour, status } = sessionRequest
        const newSessionRequest = new SessionRequestModel(id, jolterID, talkID, roomID, date, hour, status)

        if (!newSessionRequest.talkID || !newSessionRequest.jolterID || !newSessionRequest.roomID || !newSessionRequest.hour || !newSessionRequest.date) {
            throw new HttpException({
                data: sessionRequest,
                success: false,
                errorCode: HttpStatus.BAD_REQUEST,
                error: 'Make sure you fill in all the details: talk, jolter, room, date, hour'
            }, HttpStatus.BAD_REQUEST)

        }

        if (!newSessionRequest.status) {
            sessionRequest.status = 'PENDING'
        }

        await knex('session_requests').insert(newSessionRequest)
        return { id }
    }

    async deleteSessionRequest(id): Promise<{id: string}> {
        await knex('session_requests').where('id', id).del()
        return {id}
    }

    async updateSessionRequestStatus(status, id) {
        await knex('session_requests').where('id', id).update({ status })

        if (status === 'APPROVED') {
            await this.SessionsService.addSession(status, id)
        }
        return { id }
    }


    async findSession(id) {
        const sessionRequest = await knex.select('*').from('session_requests').where('id', id)

        if (!sessionRequest[0]) {
            throw new HttpException({
                data: sessionRequest,
                success: false,
                errorCode: HttpStatus.NOT_FOUND,
                error: 'No matching result'
            }, HttpStatus.NOT_FOUND)
        }

        return sessionRequest[0]
    }
}