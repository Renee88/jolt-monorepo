import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from "./users/users.module";
import {TalksModule} from "./talks/talks.module";

@Module({
    imports: [UsersModule, TalksModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
