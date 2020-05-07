const { DataSource } = require('apollo-datasource')

class JolterAPI extends DataSource {
    constructor({store}){
        super()
        this.store = store
    }

    initialize(config){
        this.context = config.context
    }

    async getJolter({id}){
        const jolters = await this.store.jolters
        const jolter = jolters.find(jolter => jolter.id === id)
        return jolter
    }

    async getJolters(){
        const jolters = await this.store.jolters
        console.log(jolters)
        return jolters
    }
}

module.exports = JolterAPI