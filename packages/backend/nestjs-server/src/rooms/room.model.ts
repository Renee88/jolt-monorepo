export class Room {
    participants: any[] ;

    constructor(
        public id: string,
        public name: string,
        public jolter: string,
        public talk: string
    ) {
        this.participants = [];
    }
}