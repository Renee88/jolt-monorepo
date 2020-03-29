import {HttpException, HttpStatus, Injectable, NotFoundException} from "@nestjs/common";
import {Room} from "./room.model";
import {v4 as uuidv4} from 'uuid';


@Injectable()
export class RoomsService {
    rooms: Room[] = require('../../../Data/Rooms.json');

    getRooms() {
        return [...this.rooms]
    }

    getRoom(id: string) {
        const [room] = this.findRoom(id);
        return {...room}
    }

    addRoom(name, talk, jolter):  string  {
        const roomId = uuidv4();
        const newRoom = new Room(roomId, name, talk, jolter);

        if(!newRoom.name || !newRoom.jolter){
            throw new HttpException({
                data: newRoom,
                success: false,
                errorCode: HttpStatus.BAD_REQUEST,
                error: 'Make sure to fill in all the details: room name, jolter'
            }, HttpStatus.BAD_REQUEST)
        }

        this.rooms.push(newRoom);
        return roomId
    }

    deleteRoom(id: string) {
        const roomIndex = this.findRoom(id)[1];
        this.rooms.splice(roomIndex, 1)
    }

    findRoom(id: string): [Room, number] {
        const roomIndex = this.rooms.findIndex(room => room.id === id);
        const room = this.rooms[roomIndex];

        if (roomIndex === -1) {
            throw new HttpException({
                data: room,
                success: false,
                errorCode: HttpStatus.NOT_FOUND,
                error: 'Room not found'
            }, HttpStatus.NOT_FOUND)
        }
        return [room, roomIndex]
    }


}