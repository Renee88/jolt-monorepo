
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Session {
    id?: string;
    jolterID?: string;
    talkID?: string;
    roomID?: string;
    date?: string;
    hour?: string;
    status?: string;
}

export abstract class IQuery {
    abstract session(id: string): Session | Promise<Session>;

    abstract sessions(): Session[] | Promise<Session[]>;
}

export abstract class IMutation {
    abstract addSession(jolterID: string, talkID: string, roomID: string, date: string, hour: string, status: string): string | Promise<string>;

    abstract cancelSession(id?: string): string | Promise<string>;
}
