import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path'
import { SessionsResolver } from './sessions.resolver';
import { SessionsController } from './sessions.controller';
import { SessionsService } from './sessions.service';

const base = `${process.cwd()}/src/sessions`

@Module({
    imports: [
        GraphQLModule.forRoot({
            typePaths: [`${base}/*.graphql`],
            resolverValidationOptions:{
                requireResolversForResolveType: false
            }
        })
    ],
    exports: [SessionsService],
    providers: [SessionsService, SessionsResolver]
})

export class SessionsModule { }