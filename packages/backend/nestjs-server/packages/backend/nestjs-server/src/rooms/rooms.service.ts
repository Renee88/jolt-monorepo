import {HttpException, HttpStatus, Injectable, NotFoundException} from "@nestjs/common";
import {Room} from "./room.model";
import {v4 as uuidv4} from 'uuid';
const knex = require('../../data/db')


@Injectable()
export class RoomsService {

    async getRooms(): Promise<Room[]> {
        const rooms = await knex.select('*').from('rooms')
        return [...rooms]
    }

    getRoom(id: string) {
        const room = this.findRoom(id);
        return {...room}
    }

    async addRoom(name, talk, jolter):  Promise<{id: string}>  {
        const id = uuidv4();
        const newRoom = new Room(id, name);

        if(!name){
            throw new HttpException({
                data: newRoom,
                success: false,
                errorCode: HttpStatus.BAD_REQUEST,
                error: 'Make sure to fill in all the details: room name, jolter'
            }, HttpStatus.BAD_REQUEST)
        }

        await knex('rooms').insert(newRoom)
        return {id}
    }

    async deleteRoom(id: string) {
        await knex('rooms').where('id', id).del()
        return { id }
    }

    async findRoom(id: string): Promise<Room> {
        // const roomIndex = this.rooms.findIndex(room => room.id === id);
        // const room = this.rooms[roomIndex];

        const room = await knex.select('*').from('rooms').where('id', id)

        if (!room[0]) {
            throw new HttpException({
                data: room,
                success: false,
                errorCode: HttpStatus.NOT_FOUND,
                error: 'Room not found'
            }, HttpStatus.NOT_FOUND)
        }

        return room[0]
    }


}