import {User} from "../users/user.model";
import {Talk} from "../talks/talk.model";
import {Room} from "../rooms/room.model";
import { Session } from "./SessionType";

interface APISuccessResponse<Data> {
    data: Data;
    success: true;
}

type ID = {id: string}


export type Data = User | Talk | Room | null | ID | Session

interface APIErrorResponse<Data> {
    data: Data;
    success: false;
    error: string;
    errorCode: string;
}

export type APIResponse<T> = APISuccessResponse<T> | APIErrorResponse<T>;