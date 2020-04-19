import { Injectable, HttpStatus, HttpException } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { SessionsService } from "../sessions/sessions.service";

@Injectable()
export class SessionRequestsService {
    private sessionRequests = []
    private sessions = []

    constructor(private readonly SessionsService: SessionsService){}

    getSessionRequests() {
        return [...this.sessionRequests]
    }

    getSessionRequest(id) {
        const [session, sessionIndex] = this.findSession(id)
        return session
    }

    addSessionRequest(sessionRequest) {
        const id = uuidv4()
        sessionRequest.id = id

        if (!sessionRequest.talkID || !sessionRequest.jolterID || !sessionRequest.roomID || !sessionRequest.hour || !sessionRequest.date) {
            throw new HttpException({
                data: sessionRequest,
                success: false,
                errorCode: HttpStatus.BAD_REQUEST,
                error: 'Make sure you fill in all the details: talk, jolter, room, date, hour'
            }, HttpStatus.BAD_REQUEST)

        }

        if(!sessionRequest.status){
            sessionRequest.status = 'PENDING'
        }

        this.sessionRequests.push(sessionRequest)
        return [...this.sessionRequests]
    }

    deleteSessionRequest(id) {
        const [sessionRequest, sessionIndex] = this.findSession(id)
        this.sessionRequests.splice(sessionIndex, 1)
        return [...this.sessionRequests]
    }

    updateSessionRequestStatus(status, id) {
        const [sessionRequest, sessionIndex] = this.findSession(id)
        sessionRequest.status = status
        const updatedSessionRequest = sessionRequest

        if(status === 'APPROVED'){
            this.SessionsService.addSession(updatedSessionRequest)
        }
        
        this.sessionRequests.splice(sessionIndex,1, updatedSessionRequest)
        return [...this.sessionRequests]
    }


    findSession(id) {
        const sessionRequestIndex = this.sessionRequests.findIndex(sessionRequest => sessionRequest.id === id)
        const sessionRequest = this.sessionRequests[sessionRequestIndex]

        if (sessionRequestIndex === -1) {
            throw new HttpException({
                data: sessionRequest,
                success: false,
                errorCode: HttpStatus.NOT_FOUND,
                error: 'No matching result'
            }, HttpStatus.NOT_FOUND)
        }

        return [sessionRequest, sessionRequestIndex]
    }
}