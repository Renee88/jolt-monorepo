import { Resolver, Args, Query, Mutation } from "@nestjs/graphql";
import { SessionsService } from "./sessions.service";
import { Session } from "../types/SessionType";

@Resolver('Session')
export class SessionsResolver {
    constructor(private sessionsService: SessionsService){}

    @Query('session')
    async getSession(@Args('id') id: string){
        const session = await this.sessionsService.getSession(id)
        return session
    }

    @Query('sessions')
    async getSessions(){
        return await this.sessionsService.getSessions()
    }

    @Mutation()
    async updateSessionStatus(
        @Args('id') id: string, 
        @Args('status') status: string){
        return await this.sessionsService.updateSessionStatus(id,status)
    }
    
}