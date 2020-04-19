const { DataSource } = require('apollo-datasource')

class TalkAPI extends DataSource {
    constructor({store}){
        super()
        this.store = store
    }

    initialize(config){
        this.context = config.context
    }

    async getTalks(){
        const talks = await this.store.talks
        return talks
    }

    async getTalk({id}){
        const talks = await this.store.talks
        const talk = talks.find(talk => talk.id === id)
        return talk
    }
}

module.exports = TalkAPI