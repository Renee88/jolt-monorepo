const { DataSource } = require('apollo-datasource')

class SessionAPI extends DataSource {
    constructor({store}){
        super()
        this.store = store
        this.sessions = []
    }

    initialize(config){
        this.context = config.context
    }

    async getSession({id}){
        const sessions = await this.store.sessions
        const session = sessions.find(session => session.id === id)
        return session
    }
}

module.exports = SessionAPI