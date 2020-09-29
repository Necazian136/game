import {ObjectDto} from '../object/object.dto';

export class TileDto {
  x: number;
  y: number;
  objects: ObjectDto[] = [];

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  addObject(object: ObjectDto): void {
    this.objects.push(object);
  }

  removeObject(object: ObjectDto): void {
    const index = this.objects.indexOf(object);
    if (index >= 0) {
      this.objects.splice(index, 1);
    }
  }
}
