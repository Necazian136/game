import {GridDto} from '../dto/grid/grid.dto';
import {ObjectDto} from '../dto/object/object.dto';

export class PlayerService {
  grid: GridDto;
  player: ObjectDto;
  allowedMoves: string[] = ['w', 'a', 's', 'd'];

  constructor(grid: GridDto, player: ObjectDto) {
    this.grid = grid;
    this.player = player;
    // TODO: Удалить, карта будет получаться с сервера
    // @ts-ignore
    this.grid.tiles[parseInt(this.grid.width / 2, 10)][parseInt(this.grid.height / 2, 10)].setObject(player);
  }

  movePlayer = (inputChar: string): void => {
    if (this.isMove(inputChar)) {
      console.log(inputChar);
    }
  };

  isMove = (inputChar: string): boolean => {
    return this.allowedMoves.includes(inputChar.toLowerCase());
  };
}
