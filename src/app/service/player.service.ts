import {GridDto} from '../dto/grid/grid.dto';
import {ObjectDto} from '../dto/object/object.dto';
import {ResponseDto} from '../dto/server/response.dto';
import {ObjectService} from './object.service';
import {NgModule, OnInit} from '@angular/core';
import {SocketService} from './socket.service';


@NgModule({
    providers: [ObjectService, SocketService]
})
export class PlayerService {
    objectService: ObjectService;
    moveDelay = 300;
    isMoveDelayed = false;
    allowedMoves: object = {w: 'Up', a: 'Left', s: 'Down', d: 'Right'};

    constructor(objectService: ObjectService, socket: SocketService) {
        this.objectService = objectService;
        this.objectService = objectService;
    }

    movePlayer = (inputChar: string): void => {
        if (this.isValidMove(inputChar)) {
            this.isMoveDelayed = true;
            this.socket.send(JSON.stringify({move: this.allowedMoves[inputChar]}));
            setTimeout(() => {
                this.isMoveDelayed = false;
            }, this.moveDelay);
        }
    }

    isValidMove = (inputChar: string): boolean => {
        return !this.isMoveDelayed &&
            Object.keys(this.allowedMoves).includes(inputChar.toLowerCase());
    }
}
