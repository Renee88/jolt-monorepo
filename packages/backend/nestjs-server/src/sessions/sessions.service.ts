import { Injectable, HttpStatus, HttpException } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SessionsService {
    private sessions = []

    getSessions() {
        return [...this.sessions]
    }

    addSession(sessionRequest) {
        const id = uuidv4()
        const session = {
            id,
            sessionRequestID: sessionRequest.id,
            status: sessionRequest.status
        }
        
        this.sessions.push(session)
    }

    updateSessionStatus(status, id) {
        const [session, sessionIndex] = this.findSession(id)
        session.status = status
        this.sessions.splice(sessionIndex, 1, session)
        return [...this.sessions]
    }

    findSession(id) {
        const sessionIndex = this.sessions.findIndex(session => session.id === id)
        const session = this.sessions[sessionIndex]

        if (sessionIndex === -1) {
            throw new HttpException({
                data: session,
                success: false,
                errorCode: HttpStatus.NOT_FOUND,
                error: 'No matching result'
            }, HttpStatus.NOT_FOUND)
        }

        return [session, sessionIndex]
    }
}