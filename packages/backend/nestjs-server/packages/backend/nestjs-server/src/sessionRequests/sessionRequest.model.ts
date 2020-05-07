export class SessionRequest {
    constructor(public id: string,
         public jolterID: string,
          public talkID: string,
          public roomID: string,
          public date: string ,
          public hour: string,
          public status: string) {
    }
}