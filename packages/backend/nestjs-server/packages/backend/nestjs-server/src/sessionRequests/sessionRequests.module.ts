import {Module} from "@nestjs/common";
import {SessionRequestsController} from "./sessionRequests.controller";
import {SessionRequestsService} from "./sessionRequests.service";
import { SessionsModule } from "../sessions/sessions.module";

@Module({
    imports: [SessionsModule],
    controllers: [SessionRequestsController],
    providers: [SessionRequestsService]
})

export class SessionRequestsModule {}