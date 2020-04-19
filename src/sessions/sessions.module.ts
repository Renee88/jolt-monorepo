import { Module } from "@nestjs/common";
import { SessionsService } from "./sessions.service";
import { SessionsController } from "./sessions.controller";

@Module({
    exports: [SessionsService],
    controllers: [SessionsController],
    providers: [SessionsService]
})

export class SessionsModule {}