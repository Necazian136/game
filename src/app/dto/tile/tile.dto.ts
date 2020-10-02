import {ObjectDto} from '../object/object.dto';

export class TileDto {
  x: number;
  y: number;
  object: ObjectDto;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.object = null;
  }

  setObject(object: ObjectDto): void {
    this.object = object;
  }

  getObject(): ObjectDto {
    return this.object;
  }

  removeObject(): void {
    this.object = null;
  }
}
