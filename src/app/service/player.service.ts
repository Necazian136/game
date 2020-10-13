import {ObjectService} from './object.service';
import {SocketService} from './socket.service';
import {Injectable} from '@angular/core';

@Injectable()
export class PlayerService {
  objectService: ObjectService;
  socketService: SocketService;
  moveDelay = 300;
  isMoveDelayed = false;
  allowedMoves: object = {w: 'Up', a: 'Left', s: 'Down', d: 'Right'};

  constructor(objectService: ObjectService, socketService: SocketService) {
    this.objectService = objectService;
    this.socketService = socketService;
    this.registerSocketMethods();
  }

  movePlayer = (inputChar: string): void => {
    if (this.isValidMove(inputChar)) {
      this.isMoveDelayed = true;
      this.socketService.send(JSON.stringify({move: this.allowedMoves[inputChar]}));
      setTimeout(() => {
        this.isMoveDelayed = false;
      }, this.moveDelay);
    }
  };

  isValidMove = (inputChar: string): boolean => {
    return !this.isMoveDelayed &&
      Object.keys(this.allowedMoves).includes(inputChar.toLowerCase());
  };

  registerSocketMethods(): void {
    this.socketService.on('')
  }
}
