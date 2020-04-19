import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from "./users/users.module";
import {TalksModule} from "./talks/talks.module";
import {RoomsModule} from "./rooms/rooms.module";
import { SessionRequestsModule } from './sessionRequests/sessionRequests.module';
import { SessionsModule } from './sessions/sessions.module';

@Module({
    imports: [UsersModule, TalksModule, RoomsModule, SessionRequestsModule, SessionsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
