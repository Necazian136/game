import {EventResolverService} from './eventResolver.service';
import {Injectable} from '@angular/core';
import {ResponseDto} from '../dto/server/response.dto';
import {GridDto} from '../dto/grid/grid.dto';
import {SocketService} from './socket.service';
import {ObjectDto} from '../dto/object/object.dto';
import {SpriteService} from './sprite.service';
import {animate} from '@angular/animations';

@Injectable()
export class PlayerService extends EventResolverService {
  moveDelay = 300;
  grid: GridDto;
  isMoveDelayed = false;
  allowedMoves: object = {w: 'Up', a: 'Left', s: 'Down', d: 'Right'};

  constructor(grid: GridDto, socket: SocketService) {
    super(socket);
    this.grid = grid;
  }

  movePlayer(inputChar: string): void {
    if (this.isValidMove(inputChar)) {
      this.isMoveDelayed = true;
      this.socketService.send(JSON.stringify({move: this.allowedMoves[inputChar]}));
      setTimeout(() => {
        this.isMoveDelayed = false;
      }, this.moveDelay);
    }
  }

  isValidMove(inputChar: string): boolean {
    return !this.isMoveDelayed &&
      Object.keys(this.allowedMoves).includes(inputChar.toLowerCase());
  }

  animateMovePlayer(player: ObjectDto, x: number, y: number, action: string): void {
    const directionX = x - player.x;
    const directionY = y - player.y;
    const stepX = directionX / this.moveDelay * 10;
    const stepY = directionY / this.moveDelay * 10;
    for (let i = 0; Math.abs(i) < Math.abs(directionX); i += stepX) {
      player.x += stepX;
    }
    for (let i = 0; Math.abs(i) < Math.abs(directionY); i += stepY) {
      player.y += stepY;
    }
  }

  // TODO: доделать рекурсию
  __animateMoveX(player: ObjectDto, i: number, directionX: number, stepX: number): void {
    player.x += stepX;
    this.__animateMoveX(player, i, directionX, stepX)
  }

  registerSocketMethods(): void {
    this.socketService.on('get_my_player', (response: ResponseDto) => {
      const playerData = response.data;
      this.grid.player = new ObjectDto(
        playerData.id,
        playerData.x,
        playerData.y,
        SpriteService.getObjectSpriteByType(playerData.type)
      );
    });

    this.socketService.on('add_player', (response: ResponseDto) => {
      console.log(response);
      const playerData = response.data;
      this.grid.objects[playerData.id] = new ObjectDto(
        playerData.id,
        playerData.x,
        playerData.y,
        SpriteService.getObjectSpriteByType(playerData.type)
      );
    });

    this.socketService.on('remove_player', (response: ResponseDto) => {
      console.log(response);
      const playerData = response.data;
      delete this.grid.objects[playerData.id];
    });

    this.socketService.on('update_player', (response: ResponseDto) => {
      console.log(response);
      const playerData = response.data;
      let player;
      if (playerData.id === this.grid.player.id) {
        player = this.grid.player;
      } else {
        player = this.grid.objects[playerData.id];
      }
      this.animateMovePlayer(player, playerData.x, playerData.y, playerData.action);
    });
  }
}
