import {GridDto} from '../dto/grid/grid.dto';
import {ObjectDto} from '../dto/object/object.dto';
import {ResponseDto} from '../dto/server/response.dto';
import {ObjectService} from './object.service';

export class PlayerService {
  grid: GridDto;
  player: ObjectDto;
  objectService: ObjectService;
  socket: WebSocket;
  moveDelay = 300;
  isMoveDelayed = false;
  allowedMoves: object = {w: 'Up', a: 'Left', s: 'Down', d: 'Right'};

  constructor(objectService: ObjectService, grid: GridDto, player: ObjectDto, socket: WebSocket) {
    this.grid = grid;
    this.player = player;
    this.socket = socket;
    this.objectService = objectService;

    socket.onopen = () => {
      socket.onmessage = (event) => {
        this.processMessage(event.data);
      };
    };
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

  processMessage = (msg): void => {
    const response = new ResponseDto(msg);
    this.drawMap(response);
  }

  drawMap = (response: ResponseDto): void => {
    response.map.forEach((row, y) => {
      row.forEach((char, x) => {

        const newObject = this.objectService.createObject(char);
        const oldObject = this.grid.tiles[y][x].getObject();
        if ((newObject === null && oldObject !== null) ||
          (newObject !== null && oldObject === null) ||
          ((newObject !== null && oldObject !== null) && (newObject.sprite !== oldObject.sprite))) {
          this.grid.tiles[y][x].setObject(newObject);
        }
      });
    });
  }
}
