const uuidv4 = require('uuid').v4
const { DataSource } = require('apollo-datasource')

class SessionAPI extends DataSource {
    constructor({ store }) {
        super()
        this.store = store
    }

    initialize(config) {
        this.context = config.context
    }

    async getSessions() {
        const sessions = await this.store.sessions
        return sessions
    }

    async getSession({ id }) {
        const sessions = await this.store.sessions
        const session = sessions.find(session => session.id === id)
        return session
    }

    async addSession(sessionRequestID, status) {
        const id = uuidv4()

        const session = {
            id,
            sessionRequestID,
            status
        }

        if (sessionID && status) {
            await this.store.sessions.push(session)
            return {
                success: true,
                sessionID
            }
        }

        return {
            success: false,
            sessionID: null
        }

    }
}

module.exports = SessionAPI