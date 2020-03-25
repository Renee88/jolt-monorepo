interface APISuccessResponse<Data> {
    data: Data | Data[];
    success: true;
}

type Maybe<T> = undefined | null | {}

interface APIErrorResponse<Data> {
    data: Maybe<Data>;
    success: false;
    error: string;
    errorCode: string;
}

export interface User {
    id: string,
    name: string,
    picture: string,
    email: string,
    age: number,
    dogs: any[]
}

interface Talk {
    id: string,
    name: string,
    transcript: string,
    youTubeID: string
}

interface Room {
    id: string,
    name: string,
    participants: User[],
    talk: string
}

export type Users = User[]

export type Data = User | Talk | Room | undefined

export type APIResponse<T> = APISuccessResponse<T> | APIErrorResponse<T>;